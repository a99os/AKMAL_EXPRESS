import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { Cron, CronExpression } from "@nestjs/schedule";
import { InjectModel } from "@nestjs/sequelize";
import { InjectBot } from "nestjs-telegraf";
import { Op } from "sequelize";
import { Context, Telegraf } from "telegraf";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Order } from "./entities/order.entity";
import * as moment from "moment";
@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    @InjectBot("AExpress") private readonly bot: Telegraf<Context>
  ) {}
  async sendNewOrderMessage(data: Order) {
    console.log(data.dataValues);
    try {
      const result = await this.bot.telegram.sendMessage(
        +process.env.GROUP_ID,
        `📆 Qabul qilindi : ${data.dataValues.createdAt.toLocaleDateString()}
📦 Buyurtma : 🆔 #${data.dataValues.order_unique_id}
💵 Buyurtma narxi: ${data.dataValues.summa}$
👤 Buyurtmachi: ${data.dataValues.full_name}
📱 Tel: ${data.dataValues.phone_number}
---------------------------------------
    
💵 Oldindan to'lov: ${data.dataValues.first_summa}$
🔗 Buyurtma linki:  ${data.dataValues.product_link}

😎 Qabul qildi: ${data.dataValues.admin.full_name}`
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  @Cron(CronExpression.EVERY_DAY_AT_1AM)
  async checkDate() {
    const today = moment().startOf("day").toDate();
    const eightyDaysAgo = moment().subtract(90, "days").startOf("day").toDate();
    const ninetyDaysAgo = moment().subtract(89, "days").startOf("day").toDate();

    const reults = await this.orderRepository.findAll({
      where: {
        [Op.and]: [
          { createdAt: { [Op.lte]: ninetyDaysAgo } },
          { createdAt: { [Op.gt]: eightyDaysAgo } },
        ],
      },
      include: { all: true, nested: true },
    });
    reults.forEach(async (data) => {
      if (data.operation.length < 3) {
        try {
          console.log(data);
          await this.bot.telegram.sendMessage(
            +process.env.GROUP_ID,
            `‼ Qabul qilinganiga 90 kun bo'lgan buyurtma:
📆 Qabul qilingan : ${data.dataValues.createdAt.toLocaleDateString()}
📦 Buyurtma : 🆔 #${data.dataValues.order_unique_id}
💵 Buyurtma narxi: ${data.dataValues.summa}$
👤 Buyurtmachi: ${data.dataValues.full_name}
📱 Tel: ${data.dataValues.phone_number}
---------------------------------------

💵 Oldindan to'lov: ${data.dataValues.first_summa}$
🔗 Buyurtma linki:  ${data.dataValues.product_link}

😞 Qabul qilgan: ${data.dataValues.admin.full_name}`
          );
        } catch (error) {
          console.log(error);
        }
      }
    });
  }
  //create
  async create(createOrderDto: CreateOrderDto, id: number) {
    try {
      const newOrder = await this.orderRepository.create({
        ...createOrderDto,
        admin_id: id,
      });
      let words = "QWERTYUIOPASDFGHJKLZXCVBNM";
      let unique_id =
        words[Math.floor(Math.random() * 26)] +
        words[Math.floor(Math.random() * 26)] +
        String(+newOrder.id + 999);
      const order = await this.orderRepository.update(
        { order_unique_id: unique_id },
        { where: { id: newOrder.id }, returning: true }
      );
      const findOrder = await this.findOne(newOrder.id);
      await this.sendNewOrderMessage(findOrder);
      return order;
    } catch (error) {
      return error;
    }
  }
  dayMonth(date) {
    var dateObj = new Date(date);
    var month = dateObj.getMonth() + 1; //months from 1-12
    var day = dateObj.getDate();
    return month + "/" + day;
  }
  addDays(date, days = -1) {
    date;
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  async statistikaOrder(date) {
    try {
      let result = { days: [], order: [] };
      for (let i = 0; i < 30; i++) {
        const resl = await this.orderRepository.findAll({
          where: {
            createdAt: {
              [Op.between]: [new Date(this.addDays(date)), new Date(date)],
            },
          },
        });
        result.days.push(this.dayMonth(date));
        result.order.push(resl.length);
        date = this.addDays(date);
      }
      result.days.reverse();
      result.order.reverse();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  //findAll
  async findAll() {
    try {
      const orders = await this.orderRepository.findAll({
        include: { all: true },
        order: [["createdAt", "DESC"]],
      });
      return orders;
    } catch (error) {
      return error;
    }
  }
  async findAllSearch(
    full_name,
    order_unique_id,
    datePick,
    status_id,
    admin,
    admin_id,
    page
  ) {
    try {
      const query = {};
      if (full_name) {
        query["full_name"] = { [Op.iLike]: "%" + full_name + "%" };
      }
      if (order_unique_id) {
        query["order_unique_id"] = { [Op.iLike]: "%" + order_unique_id + "%" };
      }
      if (admin) {
        query["admin_id"] = admin_id;
      }
      if (datePick) {
        query["createdAt"] = {
          [Op.between]: [new Date(datePick[0]), new Date(datePick[1])],
        };
      }
      let orders, pages, all;
      if (!status_id) {
        [orders, all] = await Promise.all([
          await this.orderRepository.findAll({
            include: { all: true },
            order: [["createdAt", "DESC"]],
            where: query,
            limit: 10,
            offset: (page - 1) * 10,
          }),
          await this.orderRepository.findAll({
            include: { all: true },
            order: [["createdAt", "DESC"]],
            where: query,
          }),
        ]);
        pages = Math.ceil(all.length / 10);
      } else {
        orders = await this.orderRepository.findAll({
          include: { all: true },
          order: [["createdAt", "DESC"]],
          where: query,
        });
        pages = Math.ceil(orders.length / 10);
        orders = orders
          .filter((val) => val.operation.length == status_id)
          .slice((page - 1) * 10, page * 10);
      }
      return { orders, pages };
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //findOne
  async findOne(id: number) {
    try {
      const order = await this.orderRepository.findOne({
        where: { id },
        include: { all: true, nested: true },
      });
      if (!order) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      return order;
    } catch (error) {
      return error;
    }
  }
  async findOnebgUniqueID(id: string) {
    try {
      const order = await this.orderRepository.findOne({
        where: { order_unique_id: id },
        include: { all: true, nested: true },
        order: [["createdAt", "DESC"]],
      });
      if (!order) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      return order;
    } catch (error) {
      return error;
    }
  }

  //update
  // async update(id: number, updateOrderDto: UpdateOrderDto) {
  //   try {
  //     const order = await this.orderRepository.findOne({ where: { id } });
  //     if (!order) {
  //       throw new HttpException("Not found", HttpStatus.NOT_FOUND);
  //     }
  //     const updateOrder = await this.orderRepository.update(updateOrderDto, {
  //       where: { id },
  //       returning: true,
  //     });
  //     return updateOrder;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  async remove(id: number) {
    try {
    } catch (error) {
      return error;
    }
  }
}
