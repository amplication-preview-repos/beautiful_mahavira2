/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserStatusService } from "../userStatus.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserStatusCreateInput } from "./UserStatusCreateInput";
import { UserStatus } from "./UserStatus";
import { UserStatusFindManyArgs } from "./UserStatusFindManyArgs";
import { UserStatusWhereUniqueInput } from "./UserStatusWhereUniqueInput";
import { UserStatusUpdateInput } from "./UserStatusUpdateInput";
import { CompanyFindManyArgs } from "../../company/base/CompanyFindManyArgs";
import { Company } from "../../company/base/Company";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserStatusControllerBase {
  constructor(
    protected readonly service: UserStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserStatus })
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUserStatus(
    @common.Body() data: UserStatusCreateInput
  ): Promise<UserStatus> {
    return await this.service.createUserStatus({
      data: data,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserStatus] })
  @ApiNestedQuery(UserStatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userStatuses(@common.Req() request: Request): Promise<UserStatus[]> {
    const args = plainToClass(UserStatusFindManyArgs, request.query);
    return this.service.userStatuses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userStatus(
    @common.Param() params: UserStatusWhereUniqueInput
  ): Promise<UserStatus | null> {
    const result = await this.service.userStatus({
      where: params,
      select: {
        createdAt: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUserStatus(
    @common.Param() params: UserStatusWhereUniqueInput,
    @common.Body() data: UserStatusUpdateInput
  ): Promise<UserStatus | null> {
    try {
      return await this.service.updateUserStatus({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserStatus })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserStatus(
    @common.Param() params: UserStatusWhereUniqueInput
  ): Promise<UserStatus | null> {
    try {
      return await this.service.deleteUserStatus({
        where: params,
        select: {
          createdAt: true,
          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/company")
  @ApiNestedQuery(CompanyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  async findCompany(
    @common.Req() request: Request,
    @common.Param() params: UserStatusWhereUniqueInput
  ): Promise<Company[]> {
    const query = plainToClass(CompanyFindManyArgs, request.query);
    const results = await this.service.findCompany(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        totalFields: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/company")
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "update",
    possession: "any",
  })
  async connectCompany(
    @common.Param() params: UserStatusWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      company: {
        connect: body,
      },
    };
    await this.service.updateUserStatus({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/company")
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "update",
    possession: "any",
  })
  async updateCompany(
    @common.Param() params: UserStatusWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      company: {
        set: body,
      },
    };
    await this.service.updateUserStatus({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/company")
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "update",
    possession: "any",
  })
  async disconnectCompany(
    @common.Param() params: UserStatusWhereUniqueInput,
    @common.Body() body: CompanyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      company: {
        disconnect: body,
      },
    };
    await this.service.updateUserStatus({
      where: params,
      data,
      select: { id: true },
    });
  }
}