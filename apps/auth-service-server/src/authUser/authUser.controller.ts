import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthUserService } from "./authUser.service";
import { AuthUserControllerBase } from "./base/authUser.controller.base";

@swagger.ApiTags("authUsers")
@common.Controller("authUsers")
export class AuthUserController extends AuthUserControllerBase {
  constructor(
    protected readonly service: AuthUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
