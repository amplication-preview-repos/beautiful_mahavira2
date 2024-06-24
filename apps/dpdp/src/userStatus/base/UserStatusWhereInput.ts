/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CompanyListRelationFilter } from "../../company/base/CompanyListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { EnumUserStatusStatus } from "./EnumUserStatusStatus";

@InputType()
class UserStatusWhereInput {
  @ApiProperty({
    required: false,
    type: () => CompanyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CompanyListRelationFilter)
  @IsOptional()
  @Field(() => CompanyListRelationFilter, {
    nullable: true,
  })
  company?: CompanyListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumUserStatusStatus,
  })
  @IsEnum(EnumUserStatusStatus)
  @IsOptional()
  @Field(() => EnumUserStatusStatus, {
    nullable: true,
  })
  status?: "Completed" | "Pending" | "Denied";
}

export { UserStatusWhereInput as UserStatusWhereInput };