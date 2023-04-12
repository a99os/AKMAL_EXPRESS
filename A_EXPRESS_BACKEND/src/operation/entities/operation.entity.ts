import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Admin } from "src/admin/entities/admin.entity";
import { Order } from "src/order/entities/order.entity";
import { Status } from "src/status/entities/status.entity";

@Table({ tableName: "operation" })
export class Operation extends Model<Operation> {
  @ApiProperty({ example: 1, description: "Unical ID" })
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({
    example: 29,
    description: "order id, connect with order table",
  })
  @ForeignKey(() => Order)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  order_id: number;

  @ApiProperty({
    example: 2,
    description: "Status id, connect with status table",
  })
  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  status_id: number;

  @ApiProperty({
    example: "09.10.2023",
    description: "Created operatioin date",
  })
  @Column({
    type: DataType.DATE,
  })
  operation_date: Date;

  @ApiProperty({
    example: 4,
    description: "Admin id, connect with admin table",
  })
  @ForeignKey(() => Admin)
  @Column({
    type: DataType.SMALLINT,
    allowNull: false,
  })
  admin_id: number;

  @ApiProperty({
    example: "About operation",
    description: "Description about for operation",
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Admin)
  admin: Admin;
}
