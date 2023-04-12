import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SuperAddGuard } from "../guards/creator-admin.guard";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { LoginDto } from "./dto/loginDto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./entities/admin.entity";

@ApiTags("admin")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // @UseGuards(SuperAddGuard)
  @ApiOperation({ summary: "Create admin" })
  @ApiResponse({ status: 201, type: Admin })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }
  @Post("/checktoken/:Token")
  checkToken(@Param() token: string) {
    return this.adminService.checkToken(token);
  }

  @ApiOperation({ summary: "Login for admin" })
  @ApiResponse({ status: 200, type: "access_token and refresh_token" })
  @Post("/login")
  login(@Body() login: LoginDto) {
    return this.adminService.login(login);
  }

  @UseGuards(SuperAddGuard)
  @ApiOperation({ summary: "toggle status for admin" })
  @ApiResponse({ status: 200, type: String })
  @Put("/toggle/:id")
  toggleStatus(@Param("id") id) {
    return this.adminService.toggleStatus(+id);
  }
  // @ApiOperation({ summary: "Logout for admin" })
  // @ApiResponse({ status: 200, type: String })
  // @Patch("/logout/:id")
  // logout(@Param(":id") id: string) {
  //   return this.adminService.logout(+id);
  // }

  @UseGuards(SuperAddGuard)
  @ApiOperation({ summary: "FindAll admin" })
  @ApiResponse({ status: 200, type: [Admin] })
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(SuperAddGuard)
  @ApiOperation({ summary: "FindOne admin" })
  @ApiResponse({ status: 200, type: Admin })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @UseGuards(SuperAddGuard)
  @ApiOperation({ summary: "Update admin" })
  @ApiResponse({ status: 200, type: Admin })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @UseGuards(SuperAddGuard)
  @ApiOperation({ summary: "Remove admin" })
  @ApiResponse({ status: 200, type: Admin })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }

  @UseGuards(SuperAddGuard)
  @ApiOperation({ summary: "Delete permanetnly for admin" })
  @ApiResponse({ status: 200, type: String })
  @Delete("remove/:id")
  deletePermatently(@Param("id") id: string) {
    return this.adminService.deletePermanently(+id);
  }
}
