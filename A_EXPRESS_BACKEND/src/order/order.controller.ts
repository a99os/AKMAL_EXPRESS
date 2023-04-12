import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Order } from "./entities/order.entity";
import { IdGetter } from "../decorator/getId.decorator";
import { AddGuard } from "../guards/admin.guard";

@ApiTags("order")
@Controller("order")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "Create order" })
  @ApiResponse({ status: 201, type: Order })
  @Post()
  create(@Body() createOrderDto: CreateOrderDto, @IdGetter() id: number) {
    return this.orderService.create(createOrderDto, id);
  }
  @UseGuards(AddGuard)
  @ApiOperation({ summary: "Create order" })
  @ApiResponse({ status: 201, type: Order })
  @Post("statistika/:date")
  statistika(@Param("date") date) {
    return this.orderService.statistikaOrder(date);
  }

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "FindAll order" })
  @ApiResponse({ status: 200, type: [Order] })
  @Post("getAll")
  findAll(
    @Body() data: { full_name; id; datePick; status_id; admin; page },
    @IdGetter() admin_id: number
  ) {
    return this.orderService.findAllSearch(
      data.full_name,
      data.id,
      data.datePick,
      data.status_id,
      data.admin,
      admin_id,
      data.page
    );
  }

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "FindOne order" })
  @ApiResponse({ status: 200, type: Order })
  @Get("id/:id")
  findOne(@Param("id") id: string) {
    return this.orderService.findOne(+id);
  }
  @ApiOperation({ summary: "FindOne order" })
  @ApiResponse({ status: 200, type: Order })
  @Get(":id")
  findOnebgUniqueID(@Param("id") id: string) {
    return this.orderService.findOnebgUniqueID(id);
  }

  // @ApiOperation({ summary: "Update order" })
  // @ApiResponse({ status: 200, type: Order })
  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateOrderDto: UpdateOrderDto) {
  //   return this.orderService.update(+id, updateOrderDto);
  // }

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "Remove order" })
  @ApiResponse({ status: 200, type: Order })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.orderService.remove(+id);
  }
}
