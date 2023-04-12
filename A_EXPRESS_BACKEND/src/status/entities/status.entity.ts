import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: "status"})
export class Status extends Model<Status> {

    @ApiProperty({ example: 1, description: "Unical ID" })
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    })
    id: number

    @ApiProperty({ example: "yangi", description: "Name of status" })
    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    name: string

    @ApiProperty({ example: "About status", description: "Description about status" })
    @Column({
        type: DataType.STRING
    })
    description: string
}
