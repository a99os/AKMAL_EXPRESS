import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCurrencyTypeDto } from './dto/create-currency_type.dto';
import { UpdateCurrencyTypeDto } from './dto/update-currency_type.dto';
import { CurrencyType } from './entities/currency_type.entity';

@Injectable()
export class CurrencyTypeService {
  constructor(@InjectModel(CurrencyType) private currencyTypeRepository: typeof CurrencyType) { }

  //create
  async create(createCurrencyTypeDto: CreateCurrencyTypeDto) {
    try {
      const oldCurrency = await this.currencyTypeRepository.findOne({ where: { name: createCurrencyTypeDto.name } })
      if (oldCurrency) {
        throw new HttpException("This currency type already exists", HttpStatus.CONFLICT)
      }
      const newCurrency = await this.currencyTypeRepository.create(createCurrencyTypeDto)
      return newCurrency
    } catch (error) {
      return error
    }
  }


  //findAll
  async findAll() {
    try {
      const currencyTypes = await this.currencyTypeRepository.findAll()
      return currencyTypes
    } catch (error) {
      return error
    }
  }


  //findOne
  async findOne(id: number) {
    try {
      const currencyType = await this.currencyTypeRepository.findOne({ where: { id } })
      if (!currencyType) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND)
      }
      return currencyType
    } catch (error) {
      return error
    }
  }


  //update
  async update(id: number, updateCurrencyTypeDto: UpdateCurrencyTypeDto) {
    try {
      const currencyType = await this.currencyTypeRepository.findOne({ where: { id } })
      if (!currencyType) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND)
      }
      const updateCurrency = await this.currencyTypeRepository.update(updateCurrencyTypeDto, { where: { id }, returning: true })
      return updateCurrency
    } catch (error) {
      return error
    }
  }


  //remove
  async remove(id: number) {
    try {

    } catch (error) {
      return error
    }
  }
}
