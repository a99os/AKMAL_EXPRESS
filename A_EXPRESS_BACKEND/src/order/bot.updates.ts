import { Ctx, On, Start, Update } from "nestjs-telegraf";
import { Context } from "telegraf";
import { OrderService } from "./order.service";

@Update()
export class AppUpdate {
  constructor(private orderService: OrderService) {}
  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply(
      "A-Express rasmiy botiga xush kelibsiz. Buyurtma ID sini jo'natib buyurtmangiz haqida ma'lumotga ega bo'ling"
    );
  }
  @On("message")
  async message(@Ctx() ctx: Context) {
    if ("text" in ctx.message) {
      if (ctx.message.text[0] === "#") {
        ctx.message.text = ctx.message.text.slice(1);
      }
      await ctx.sendChatAction("typing");
      const data = await this.orderService.findOnebgUniqueID(ctx.message.text);
      if (!data.id) {
        await ctx.reply("🤷‍♂️ Buyurtma topilmadi");
      } else {
        await ctx.reply(`📆 Qabul qilingan : ${data.dataValues.createdAt.toLocaleDateString()}
📦 Buyurtma : 🆔 #${data.dataValues.order_unique_id}
💵 Buyurtma narxi: ${data.dataValues.summa}$
👤 Buyurtmachi: ${data.dataValues.full_name}
📱 Tel: ${data.dataValues.phone_number}
        ---------------------------------------
        
💵 Oldindan to'lov: ${data.dataValues.first_summa}$
🔗 Buyurtma linki:  ${data.dataValues.product_link}
Holati:
${
  data.dataValues.operation[0]
    ? `🆕 Yangi qabul qilingan ${data?.operation[0]?.createdAt.toLocaleDateString()} / ${
        new Date(data?.operation[0]?.createdAt).getHours() + 4
      }:${new Date(data?.operation[0]?.createdAt).getMinutes()}`
    : null
}
${
  data.dataValues.operation[1]
    ? `⏳ Yangi qabul qilingan ${data?.operation[1]?.createdAt.toLocaleDateString()} / ${
        new Date(data?.operation[1]?.createdAt).getHours() + 4
      }:${new Date(data?.operation[1]?.createdAt).getMinutes()}`
    : ""
}
${
  data.dataValues.operation[2]
    ? `✅ Yakunlangan ${data?.operation[2]?.createdAt.toLocaleDateString()} / ${
        new Date(data?.operation[1]?.createdAt).getHours() + 4
      }:${new Date(data?.operation[2]?.createdAt).getMinutes()}`
    : ""
}
`);
      }
    }
  }
}
