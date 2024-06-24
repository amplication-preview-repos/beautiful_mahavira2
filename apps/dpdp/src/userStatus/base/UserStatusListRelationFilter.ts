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
import { UserStatusWhereInput } from "./UserStatusWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserStatusListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => UserStatusWhereInput)
  @IsOptional()
  @Field(() => UserStatusWhereInput, {
    nullable: true,
  })
  every?: UserStatusWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => UserStatusWhereInput)
  @IsOptional()
  @Field(() => UserStatusWhereInput, {
    nullable: true,
  })
  some?: UserStatusWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => UserStatusWhereInput)
  @IsOptional()
  @Field(() => UserStatusWhereInput, {
    nullable: true,
  })
  none?: UserStatusWhereInput;
}
export { UserStatusListRelationFilter as UserStatusListRelationFilter };