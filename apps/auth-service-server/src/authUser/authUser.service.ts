import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthUserServiceBase } from "./base/authUser.service.base";

@Injectable()
export class AuthUserService extends AuthUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
