import { Injectable } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/sequelize";
import { AuthService } from "src/auth/auth.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { LoginDto } from "./dto/loginDto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./entities/admin.entity";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepository: typeof Admin,
    readonly auth: AuthService
  ) {}

  //create
  async create(createAdminDto: CreateAdminDto) {
    try {
      const admin = await this.findAll();
      const is_creator = admin.length ? false : true;
      const password = await this.auth.hashedPassword(
        createAdminDto?.hashed_password
      );
      const oldAdmin = await this.adminRepository.findOne({
        where: { user_name: createAdminDto.user_name },
      });
      if (oldAdmin) {
        throw new HttpException(
          "This username already exists",
          HttpStatus.BAD_REQUEST
        );
      }

      const token = await this.auth.getTokens(createAdminDto);
      const refresh_token = await this.auth.hashedPassword(token.refresh_token);
      const newAdmin = await this.adminRepository.create({
        ...createAdminDto,
        password: password,
        token: refresh_token,
        is_creator,
      });
      return newAdmin;
    } catch (error) {
      return error;
    }
  }

  async checkToken(token) {
    try {
      if (token) {
        const adminData = await new JwtService().verify(token.Token, {
          secret: process.env.REFRESH_TOKEN_KEY,
        });

        if (adminData) {
          if (adminData.id && adminData.active) {
            const admin = await this.adminRepository.findOne({
              where: { id: +adminData.id },
            });
            if (admin) {
              if (admin.is_creator) {
                return { isValid: true, admin: { ...admin, role: 1 } };
              }
              return { isValid: true, admin: { ...admin, role: 2 } };
            }
          }
        }
      }
      return { isValid: false };
    } catch (error) {
      console.log(error);
      return { isValid: false, error: error.message };
    }
  }

  //login
  async login(login: LoginDto) {
    try {
      const admin = await this.adminRepository.findOne({
        where: { user_name: login.user_name, is_active: true },
      });
      if (!admin) {
        throw new HttpException(
          "User name or password invalid",
          HttpStatus.BAD_REQUEST
        );
      }

      const password = await this.auth.compairPassword(
        login.password,
        admin.password
      );

      if (!password) {
        throw new HttpException(
          "User name or password invalid",
          HttpStatus.BAD_REQUEST
        );
      }
      const token = await this.auth.getTokens(admin);
      const refresh_token = await this.auth.hashedPassword(token.refresh_token);
      await this.adminRepository.update(
        { token: refresh_token },
        { where: { id: admin.id } }
      );
      console.log(token);
      return { token, admin };
    } catch (error) {
      return error;
    }
  }

  async toggleStatus(id: number) {
    try {
      const admin = await this.adminRepository.findOne({ where: { id } });
      if (!admin) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      admin.is_active ? (admin.is_active = false) : (admin.is_active = true);
      if (admin.is_creator) {
        return 1;
      }
      await admin.save();
      return admin.is_active;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  //logout
  // async logout(id: number) {
  //   try {
  //     const admin = await this.adminRepository.findOne({ where: { id } });
  //     if (!admin) {
  //       throw new HttpException("Not found", HttpStatus.NOT_FOUND);
  //     }
  //     await this.adminRepository.update(
  //       { is_active: false, token: null },
  //       { where: { id } }
  //     );
  //     return "Successfully exited";
  //   } catch (error) {
  //     return error;
  //   }
  // }

  //activate
  async activate(id: number) {
    try {
      const admin = await this.adminRepository.findOne({ where: { id } });
      if (!admin) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      await this.adminRepository.update({ is_active: true }, { where: { id } });
      return "Activated";
    } catch (error) {
      return error;
    }
  }

  //deActivate
  async deActivate(id: number) {
    try {
      const admin = await this.adminRepository.findOne({ where: { id } });
      if (!admin) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      await this.adminRepository.update(
        { is_active: false },
        { where: { id } }
      );
      return "inactivated";
    } catch (error) {
      return error;
    }
  }

  //findAll
  async findAll() {
    try {
      const admins = await this.adminRepository.findAll({
        order: [["createdAt", "DESC"]],
        include: { all: true },
      });
      return admins;
    } catch (error) {
      return error;
    }
  }

  //findOne
  async findOne(id: number) {
    try {
      const admin = await this.adminRepository.findOne({ where: { id } });
      if (!admin) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      return admin;
    } catch (error) {
      return error;
    }
  }

  //update
  async update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      const admin = await this.adminRepository.findOne({ where: { id } });
      if (!admin) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      const updateAdmin = await this.adminRepository.update(updateAdminDto, {
        where: { id },
        returning: true,
      });
      return updateAdmin;
    } catch (error) {
      return error;
    }
  }

  //remove
  async remove(id: number) {
    try {
      const admin = await this.adminRepository.findOne({ where: { id } });
      if (!admin) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      const removeAdmin = await this.adminRepository.update(
        { is_active: false },
        { where: { id }, returning: true }
      );
      return removeAdmin;
    } catch (error) {
      return error;
    }
  }

  //delete permenently
  async deletePermanently(id: number) {
    try {
      const admin = await this.adminRepository.findOne({ where: { id } });
      if (!admin) {
        throw new HttpException("Not found", HttpStatus.NOT_FOUND);
      }
      await this.adminRepository.destroy({ where: { id } });
      return "Successfully removed";
    } catch (error) {
      return error;
    }
  }
}
