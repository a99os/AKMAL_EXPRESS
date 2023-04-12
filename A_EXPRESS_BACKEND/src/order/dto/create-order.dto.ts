import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateOrderDto {
  @ApiProperty({ example: "Jhon Doe", description: "Full name of customer" })
  @IsString()
  readonly full_name: string;

  @ApiProperty({
    example: "998999002559",
    description: "Phone number of customer",
  })
  @IsString()
  readonly phone_number: string;

  @ApiProperty({ example: "https://example.com", description: "Product link" })
  @IsString()
  readonly product_link: string;

  @ApiProperty({ example: "278900", description: "Price of order" })
  @IsNumber()
  readonly summa: number;
  @ApiProperty({ example: "278900", description: "Price of order" })
  @IsNumber()
  readonly first_summa: number;
}
