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
import { OperationService } from "./operation.service";
import { CreateOperationDto } from "./dto/create-operation.dto";
import { UpdateOperationDto } from "./dto/update-operation.dto";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Operation } from "./entities/operation.entity";
import { IdGetter } from "../decorator/getId.decorator";
import { AddGuard } from "../guards/admin.guard";

@Controller("operation")
export class OperationController {
  constructor(private readonly operationService: OperationService) {}

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "Create operation" })
  @ApiResponse({ status: 201, type: Operation })
  @Post()
  create(
    @Body() createOperationDto: CreateOperationDto,
    @IdGetter() id: number
  ) {
    return this.operationService.create(createOperationDto, id);
  }

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "FindAll operation" })
  @ApiResponse({ status: 200, type: [Operation] })
  @Get()
  findAll() {
    return this.operationService.findAll();
  }

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "FindOne operation" })
  @ApiResponse({ status: 200, type: Operation })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.operationService.findOne(+id);
  }

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "Update operation" })
  @ApiResponse({ status: 200, type: String })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateOperationDto: UpdateOperationDto
  ) {
    return this.operationService.update(+id, updateOperationDto);
  }

  @UseGuards(AddGuard)
  @ApiOperation({ summary: "Remove operation" })
  @ApiResponse({ status: 200, type: String })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.operationService.remove(+id);
  }
}
