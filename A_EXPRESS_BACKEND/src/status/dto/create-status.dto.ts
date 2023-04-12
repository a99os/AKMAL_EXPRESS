import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateStatusDto {
    @ApiProperty({ example: "yangi", description: "Name of status" })
    @IsString()
    readonly name: string

    @ApiProperty({ example: "About status", description: "Description about status" })
    readonly description: string

}
