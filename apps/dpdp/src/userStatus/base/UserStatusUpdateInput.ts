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
import { CompanyUpdateManyWithoutUserStatusesInput } from "./CompanyUpdateManyWithoutUserStatusesInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumUserStatusStatus } from "./EnumUserStatusStatus";

@InputType()
class UserStatusUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CompanyUpdateManyWithoutUserStatusesInput,
  })
  @ValidateNested()
  @Type(() => CompanyUpdateManyWithoutUserStatusesInput)
  @IsOptional()
  @Field(() => CompanyUpdateManyWithoutUserStatusesInput, {
    nullable: true,
  })
  company?: CompanyUpdateManyWithoutUserStatusesInput;

  @ApiProperty({
    required: false,
    enum: EnumUserStatusStatus,
  })
  @IsEnum(EnumUserStatusStatus)
  @IsOptional()
  @Field(() => EnumUserStatusStatus, {
    nullable: true,
  })
  status?: "Completed" | "Pending" | "Denied" | null;
}

export { UserStatusUpdateInput as UserStatusUpdateInput };