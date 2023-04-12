import { ApiProperty } from "@nestjs/swagger";

export class CreateOperationDto {
  @ApiProperty({
    example: 29,
    description: "order id, connect with order table",
  })
  order_id: number;

  @ApiProperty({
    example: 2,
    description: "Status id, connect with status table",
  })
  status_id: number;

  @ApiProperty({
    example: "09.10.2023",
    description: "Created operatioin date",
  })
  operation_date: Date;

  @ApiProperty({
    example: "About operation",
    description: "Description about for operation",
  })
  description: string;
}
