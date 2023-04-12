import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateCurrencyTypeDto {

    @ApiProperty({ example: "USZ", description: "Name of currency type" })
    @IsString()
    readonly name: string

    @ApiProperty({ example: "About currency type", description: "Description about currency type" })
    readonly description: string

}
