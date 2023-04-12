import { Module } from "@nestjs/common";
import { OperationService } from "./operation.service";
import { OperationController } from "./operation.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Operation } from "./entities/operation.entity";
import { Order } from "src/order/entities/order.entity";
import { Status } from "src/status/entities/status.entity";
import { Admin } from "src/admin/entities/admin.entity";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Operation, Order, Status, Admin]),
    JwtModule,
    AdminModule,
    AuthModule,
  ],
  controllers: [OperationController],
  providers: [OperationService],
})
export class OperationModule {}
