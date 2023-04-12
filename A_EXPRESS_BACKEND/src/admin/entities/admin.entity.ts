import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Operation } from "src/operation/entities/operation.entity";
import { Order } from "../../order/entities/order.entity";

@Table({ tableName: "admin" })
export class Admin extends Model<Admin> {
  @ApiProperty({ example: 1, description: "Unical ID" })
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: "Jack Born", description: "Full name of admin" })
  @Column({
    type: DataType.STRING(30),
  })
  full_name: string;

  @ApiProperty({ example: "admin12344", description: "User name of admin" })
  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  user_name: string;

  @ApiProperty({
    example: "admin788",
    description: "Password of admin, Password hashed",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({
    example: "998999654231",
    description: "Phone number of admin",
  })
  @Column({
    type: DataType.STRING(20),
    unique: true,
  })
  phone_number: string;

  @ApiProperty({
    example: "Admin token",
    description: "Token of admin, Token hashed",
  })
  @Column({
    type: DataType.STRING,
  })
  token: string;

  @ApiProperty({ example: false, description: "Admin creator or not" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creator: boolean;

  @ApiProperty({ example: false, description: "Admin active or not" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @HasMany(() => Operation)
  operation: Operation[];
  @HasMany(() => Order)
  orders: Order[];
}
