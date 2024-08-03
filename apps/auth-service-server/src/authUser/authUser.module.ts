import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthUserModuleBase } from "./base/authUser.module.base";
import { AuthUserService } from "./authUser.service";
import { AuthUserController } from "./authUser.controller";
import { AuthUserResolver } from "./authUser.resolver";

@Module({
  imports: [AuthUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthUserController],
  providers: [AuthUserService, AuthUserResolver],
  exports: [AuthUserService],
})
export class AuthUserModule {}
