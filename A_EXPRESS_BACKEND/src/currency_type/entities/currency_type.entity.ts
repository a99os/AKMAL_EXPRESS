import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CurrencyTypeAttr {
  name: string;
}

@Table({ tableName: "currency_type" })
export class CurrencyType extends Model<CurrencyType, CurrencyTypeAttr> {
  @ApiProperty({ example: 1, description: "Unical ID" })
  @Column({
    type: DataType.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: "USZ", description: "Name of currency type" })
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: "About currency type",
    description: "Description about currency type",
  })
  @Column({
    type: DataType.STRING,
  })
  description: string;
}
