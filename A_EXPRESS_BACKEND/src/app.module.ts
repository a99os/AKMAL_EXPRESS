import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Order } from "./order/entities/order.entity";
import { OrderModule } from "./order/order.module";
import { CurrencyTypeModule } from "./currency_type/currency_type.module";
import { AdminModule } from "./admin/admin.module";
import { CurrencyType } from "./currency_type/entities/currency_type.entity";
import { Admin } from "./admin/entities/admin.entity";
import { StatusModule } from "./status/status.module";
import { Status } from "./status/entities/status.entity";
import { OperationModule } from "./operation/operation.module";
import { Operation } from "./operation/entities/operation.entity";
import { TelegrafModule } from "nestjs-telegraf";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Order, CurrencyType, Admin, Status, Operation],
      autoLoadModels: true,
      logging: false,
    }),
    OrderModule,
    CurrencyTypeModule,
    AdminModule,
    StatusModule,
    OperationModule,
    ScheduleModule.forRoot(),
    TelegrafModule.forRootAsync({
      botName: "AExpress",
      imports: [ConfigModule],
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [],

        include: [],
      }),
    }),
    TelegrafModule.forRootAsync({
      botName: "AExpressUser",
      imports: [ConfigModule],
      useFactory: () => ({
        token: process.env.BOT_TOKEN_USER,
        middlewares: [],
        include: [],
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
