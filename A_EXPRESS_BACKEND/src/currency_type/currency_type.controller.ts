import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrencyTypeService } from './currency_type.service';
import { CreateCurrencyTypeDto } from './dto/create-currency_type.dto';
import { UpdateCurrencyTypeDto } from './dto/update-currency_type.dto';
import { CurrencyType } from './entities/currency_type.entity';

@ApiTags("currency-type")
@Controller('currency-type')
export class CurrencyTypeController {
  constructor(private readonly currencyTypeService: CurrencyTypeService) {}

  @ApiOperation({ summary: "Create currency type" })
  @ApiResponse({ status: 201, type: CurrencyType })
  @Post()
  create(@Body() createCurrencyTypeDto: CreateCurrencyTypeDto) {
    return this.currencyTypeService.create(createCurrencyTypeDto);
  }
  
  @ApiOperation({ summary: "FindAll currency type" })
  @ApiResponse({ status: 200, type: [CurrencyType] })
  @Get()
  findAll() {
    return this.currencyTypeService.findAll();
  }
  
  @ApiOperation({ summary: "FindOne currency type" })
  @ApiResponse({ status: 200, type: CurrencyType })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.currencyTypeService.findOne(+id);
  }
  
  @ApiOperation({ summary: "Update currency type" })
  @ApiResponse({ status: 200, type: CurrencyType })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurrencyTypeDto: UpdateCurrencyTypeDto) {
    return this.currencyTypeService.update(+id, updateCurrencyTypeDto);
  }
  
  @ApiOperation({ summary: "Remove currency type" })
  @ApiResponse({ status: 200, type: CurrencyType })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.currencyTypeService.remove(+id);
  }
}
