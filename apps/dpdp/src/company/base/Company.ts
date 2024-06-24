/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { FieldModel } from "../../fieldModel/base/FieldModel";
import { UserStatus } from "../../userStatus/base/UserStatus";

@ObjectType()
class Company {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => [FieldModel],
  })
  @ValidateNested()
  @Type(() => FieldModel)
  @IsOptional()
  fields?: Array<FieldModel>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @Field(() => Number)
  totalFields!: number;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [UserStatus],
  })
  @ValidateNested()
  @Type(() => UserStatus)
  @IsOptional()
  userStatuses?: Array<UserStatus>;
}

export { Company as Company };