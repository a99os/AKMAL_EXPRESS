import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { InjectModel } from "@nestjs/sequelize";
import { CreateOperationDto } from "./dto/create-operation.dto";
import { UpdateOperationDto } from "./dto/update-operation.dto";
import { Operation } from "./entities/operation.entity";

@Injectable()
export class OperationService {
  constructor(
    @InjectModel(Operation) private operationRepository: typeof Operation
  ) {}

  //create
  async create(createOperationDto: CreateOperationDto, id: number) {
    try {
      const operation = await this.operationRepository.create({
        ...createOperationDto,
        admin_id: id,
      });
      return operation;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  kutilmoqdakutilmoqda;

  //findAll
  async findAll() {
    try {
      const operations = await this.operationRepository.findAll({
        order: [["createdAt", "DESC"]],
        include: { all: true },
      });
      return operations;
    } catch (error) {
      return error;
    }
  }

  //findOne
  async findOne(id: number) {
    try {
      const operation = await this.operationRepository.findOne({
        where: { id },
      });
      if (!operation) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      return operation;
    } catch (error) {
      return error;
    }
  }

  //update
  async update(id: number, updateOperationDto: UpdateOperationDto) {
    try {
      const operation = await this.operationRepository.findOne({
        where: { id },
      });
      if (!operation) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      await this.operationRepository.update(updateOperationDto, {
        where: { id },
      });
      return "Successfully updated";
    } catch (error) {
      return error;
    }
  }

  //remove
  async remove(id: number) {
    try {
      const operation = await this.operationRepository.findOne({
        where: { id },
      });
      if (!operation) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      await this.operationRepository.destroy({ where: { id } });
      return "Successfully removed";
    } catch (error) {
      return error;
    }
  }
}
