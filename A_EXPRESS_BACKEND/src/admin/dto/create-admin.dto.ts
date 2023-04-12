import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ example: "Jack Born", description: "Full name of admin" })
  @IsString()
  readonly full_name: string;

  @ApiProperty({ example: "admin12344", description: "User name of admin" })
  @IsString()
  readonly user_name: string;

  @ApiProperty({
    example: "admin788",
    description: "Password of admin, Password hashed",
  })
  @IsString()
  readonly hashed_password: string;
}
