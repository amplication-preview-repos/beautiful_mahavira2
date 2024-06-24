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
import { FieldModelListRelationFilter } from "../../fieldModel/base/FieldModelListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserStatusListRelationFilter } from "../../userStatus/base/UserStatusListRelationFilter";

@InputType()
class CompanyWhereInput {
  @ApiProperty({
    required: false,
    type: () => FieldModelListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FieldModelListRelationFilter)
  @IsOptional()
  @Field(() => FieldModelListRelationFilter, {
    nullable: true,
  })
  fields?: FieldModelListRelationFilter;

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  totalFields?: IntFilter;

  @ApiProperty({
    required: false,
    type: () => UserStatusListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserStatusListRelationFilter)
  @IsOptional()
  @Field(() => UserStatusListRelationFilter, {
    nullable: true,
  })
  userStatuses?: UserStatusListRelationFilter;
}

export { CompanyWhereInput as CompanyWhereInput };