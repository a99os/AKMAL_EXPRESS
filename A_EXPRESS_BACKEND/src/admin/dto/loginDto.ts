import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class LoginDto {
    @ApiProperty({ example: "admin12344", description: "User name of admin" })
    @IsString()
    readonly user_name: string

    @ApiProperty({ example: "admin788", description: "Password of admin, Password hashed" })
    @IsString()
    readonly password: string
}