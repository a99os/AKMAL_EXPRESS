import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Order } from "./entities/order.entity";
import { CurrencyType } from "src/currency_type/entities/currency_type.entity";
import { Operation } from "src/operation/entities/operation.entity";
import { Admin } from "../admin/entities/admin.entity";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { AuthModule } from "../auth/auth.module";
import { AppUpdate } from "./bot.updates";

@Module({
  imports: [
    SequelizeModule.forFeature([Order, CurrencyType, Operation, Admin]),
    AuthModule,
    JwtModule,
    AdminModule,
  ],
  controllers: [OrderController],
  providers: [OrderService, AppUpdate],
})
export class OrderModule {}
