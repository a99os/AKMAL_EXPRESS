import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusService } from './status.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Status } from './entities/status.entity';

@ApiTags("status")
@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}


  @ApiOperation({ summary: "Create currency type" })
  @ApiResponse({ status: 201, type: Status })
  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }
  
  @ApiOperation({ summary: "FindAll currency type" })
  @ApiResponse({ status: 200, type: [Status] })
  @Get()
  findAll() {
    return this.statusService.findAll();
  }
  
  @ApiOperation({ summary: "FindOne currency type" })
  @ApiResponse({ status: 200, type: Status })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusService.findOne(+id);
  }
  
  @ApiOperation({ summary: "Update currency type" })
  @ApiResponse({ status: 200, type: String })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto) {
    return this.statusService.update(+id, updateStatusDto);
  }
  
  @ApiOperation({ summary: "Remove currency type" })
  @ApiResponse({ status: 200, type: String })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusService.remove(+id);
  }
}
