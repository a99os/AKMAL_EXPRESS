//add guard complated

import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "src/admin/admin.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AddGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    readonly auth: AuthService,
    private adminService: AdminService
  ) {}
  async canActivate(context: ExecutionContext) {
    try {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        throw new UnauthorizedException({
          message: "The user is not authorized",
        });
      }

      const bearer = authHeader.split(" ")[0];
      const token = authHeader.split(" ")[1];
      if (bearer !== "Bearer" || !token) {
        throw new UnauthorizedException({
          message: "The user is not authorized",
        });
      }

      const date = await this.jwtService.verify(token, {
        publicKey: process.env.REFRESH_TOKEN_KEY,
      });

      const admin = await this.adminService.findOne(date.id);

      if (!admin) {
        throw new UnauthorizedException({
          message: "The user is not authorized",
        });
      }

      if (!this.auth.compairToken(token, admin.token)) {
        throw new UnauthorizedException({
          message: "The user is not authorized",
        });
      }
      if (admin.is_active) {
        return true;
      }

      throw new UnauthorizedException({
        message: "The user is not authorized",
      });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.FORBIDDEN);
    }
  }
}
