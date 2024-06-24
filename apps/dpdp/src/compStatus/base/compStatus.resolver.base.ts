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
import { CompStatus } from "./CompStatus";
import { CompStatusCountArgs } from "./CompStatusCountArgs";
import { CompStatusFindManyArgs } from "./CompStatusFindManyArgs";
import { CompStatusFindUniqueArgs } from "./CompStatusFindUniqueArgs";
import { CreateCompStatusArgs } from "./CreateCompStatusArgs";
import { UpdateCompStatusArgs } from "./UpdateCompStatusArgs";
import { DeleteCompStatusArgs } from "./DeleteCompStatusArgs";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { CompStatusService } from "../compStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CompStatus)
export class CompStatusResolverBase {
  constructor(
    protected readonly service: CompStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CompStatus",
    action: "read",
    possession: "any",
  })
  async _compStatusesMeta(
    @graphql.Args() args: CompStatusCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CompStatus])
  @nestAccessControl.UseRoles({
    resource: "CompStatus",
    action: "read",
    possession: "any",
  })
  async compStatuses(
    @graphql.Args() args: CompStatusFindManyArgs
  ): Promise<CompStatus[]> {
    return this.service.compStatuses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CompStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CompStatus",
    action: "read",
    possession: "own",
  })
  async compStatus(
    @graphql.Args() args: CompStatusFindUniqueArgs
  ): Promise<CompStatus | null> {
    const result = await this.service.compStatus(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CompStatus)
  @nestAccessControl.UseRoles({
    resource: "CompStatus",
    action: "create",
    possession: "any",
  })
  async createCompStatus(
    @graphql.Args() args: CreateCompStatusArgs
  ): Promise<CompStatus> {
    return await this.service.createCompStatus({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CompStatus)
  @nestAccessControl.UseRoles({
    resource: "CompStatus",
    action: "update",
    possession: "any",
  })
  async updateCompStatus(
    @graphql.Args() args: UpdateCompStatusArgs
  ): Promise<CompStatus | null> {
    try {
      return await this.service.updateCompStatus({
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

  @graphql.Mutation(() => CompStatus)
  @nestAccessControl.UseRoles({
    resource: "CompStatus",
    action: "delete",
    possession: "any",
  })
  async deleteCompStatus(
    @graphql.Args() args: DeleteCompStatusArgs
  ): Promise<CompStatus | null> {
    try {
      return await this.service.deleteCompStatus(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User], { name: "user" })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUser(
    @graphql.Parent() parent: CompStatus,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUser(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}