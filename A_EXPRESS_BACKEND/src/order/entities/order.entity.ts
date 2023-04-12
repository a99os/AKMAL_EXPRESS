import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { CurrencyType } from "src/currency_type/entities/currency_type.entity";
import { Operation } from "src/operation/entities/operation.entity";
import { Admin } from "../../admin/entities/admin.entity";

interface OrderAttr {
  full_name: string;
  phone_number: string;
  product_link: string;
  summa: number;
  first_summa: number;
  admin_id: number;
  order_unique_id: string;
}

@Table({ tableName: "order" })
export class Order extends Model<Order, OrderAttr> {
  @ApiProperty({ example: 1, description: "Unical ID" })
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: 2987, description: "Unic for oprder id start 1000" })
  @Column({
    type: DataType.STRING(20),
  })
  order_unique_id: string;

  @ApiProperty({ example: "Jhon Doe", description: "Full name of customer" })
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  full_name: string;

  @ApiProperty({
    example: "998999002559",
    description: "Phone number of customer",
  })
  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  phone_number: string;

  @ApiProperty({ example: "https://example.com", description: "Product link" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  product_link: string;

  @ApiProperty({ example: "278900", description: "Price of order" })
  @Column({
    type: DataType.DECIMAL,
  })
  summa: number;

  @ApiProperty({ example: "1", description: "currency type id" })
  @ForeignKey(() => Admin)
  @Column({
    type: DataType.INTEGER,
  })
  admin_id: number;

  @ApiProperty({ example: "278900", description: "Price of order" })
  @Column({
    type: DataType.DECIMAL,
  })
  first_summa: string;

  @ApiProperty({
    example: "There is about order",
    description: "Description of order",
  })
  @Column({
    type: DataType.STRING,
  })
  description: number;

  @BelongsTo(() => Admin)
  admin: Admin;
  
  @HasMany(() => Operation)
  operation: Operation[];
}
