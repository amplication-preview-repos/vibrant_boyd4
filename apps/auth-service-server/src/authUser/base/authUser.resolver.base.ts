/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AuthUser } from "./AuthUser";
import { AuthUserCountArgs } from "./AuthUserCountArgs";
import { AuthUserFindManyArgs } from "./AuthUserFindManyArgs";
import { AuthUserFindUniqueArgs } from "./AuthUserFindUniqueArgs";
import { CreateAuthUserArgs } from "./CreateAuthUserArgs";
import { UpdateAuthUserArgs } from "./UpdateAuthUserArgs";
import { DeleteAuthUserArgs } from "./DeleteAuthUserArgs";
import { AuthUserService } from "../authUser.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AuthUser)
export class AuthUserResolverBase {
  constructor(
    protected readonly service: AuthUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AuthUser",
    action: "read",
    possession: "any",
  })
  async _authUsersMeta(
    @graphql.Args() args: AuthUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AuthUser])
  @nestAccessControl.UseRoles({
    resource: "AuthUser",
    action: "read",
    possession: "any",
  })
  async authUsers(
    @graphql.Args() args: AuthUserFindManyArgs
  ): Promise<AuthUser[]> {
    return this.service.authUsers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AuthUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AuthUser",
    action: "read",
    possession: "own",
  })
  async authUser(
    @graphql.Args() args: AuthUserFindUniqueArgs
  ): Promise<AuthUser | null> {
    const result = await this.service.authUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AuthUser)
  @nestAccessControl.UseRoles({
    resource: "AuthUser",
    action: "create",
    possession: "any",
  })
  async createAuthUser(
    @graphql.Args() args: CreateAuthUserArgs
  ): Promise<AuthUser> {
    return await this.service.createAuthUser({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AuthUser)
  @nestAccessControl.UseRoles({
    resource: "AuthUser",
    action: "update",
    possession: "any",
  })
  async updateAuthUser(
    @graphql.Args() args: UpdateAuthUserArgs
  ): Promise<AuthUser | null> {
    try {
      return await this.service.updateAuthUser({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AuthUser)
  @nestAccessControl.UseRoles({
    resource: "AuthUser",
    action: "delete",
    possession: "any",
  })
  async deleteAuthUser(
    @graphql.Args() args: DeleteAuthUserArgs
  ): Promise<AuthUser | null> {
    try {
      return await this.service.deleteAuthUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
