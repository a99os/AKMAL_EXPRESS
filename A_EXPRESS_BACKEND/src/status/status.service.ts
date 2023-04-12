import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './entities/status.entity';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepository: typeof Status) { }

  //create
  async create(createStatusDto: CreateStatusDto) {
    try {
      const status = await this.statusRepository.findOne({ where: { name: createStatusDto.name } })
      if (status) {
        throw new HttpException("Already exixts", HttpStatus.CONFLICT)
      }
      const newStatus = await this.statusRepository.create(createStatusDto)
      return newStatus
    } catch (error) {
      return error
    }
  }


  //findAll
  async findAll() {
    try {
      const status = await this.statusRepository.findAll()
      return status
    } catch (error) {
      return error
    }
  }


  //findOne
  async findOne(id: number) {
    try {
      const status = await this.statusRepository.findOne({ where: { id } })
      if (!status) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND)
      }
      return status
    } catch (error) {
      return error
    }
  }


  //update
  async update(id: number, updateStatusDto: UpdateStatusDto) {
    try {
      if (updateStatusDto["name"]) {
        const status = await this.statusRepository.findOne({ where: { name: updateStatusDto?.name } })
        if (status) {
          throw new HttpException("Already exixts", HttpStatus.CONFLICT)
        }
      }
      const status = await this.statusRepository.findOne({ where: { id } })
      if (!status) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND)
      }
      await this.statusRepository.update(updateStatusDto, { where: { id } })
      return "Successfully updated"
    } catch (error) {
      return error
    }
  }


  //remove
  async remove(id: number) {
    try {
      const status = await this.statusRepository.findOne({ where: { id } })
      if (!status) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND)
      }
      await this.statusRepository.destroy({ where: { id } })
      return "Successfully removed"
    } catch (error) {
      return error
    }
  }
}
