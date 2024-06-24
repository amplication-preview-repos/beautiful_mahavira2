/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CompanyUpdateManyWithoutUserStatusesInput {
  @Field(() => [CompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanyWhereUniqueInput],
  })
  connect?: Array<CompanyWhereUniqueInput>;

  @Field(() => [CompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanyWhereUniqueInput],
  })
  disconnect?: Array<CompanyWhereUniqueInput>;

  @Field(() => [CompanyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompanyWhereUniqueInput],
  })
  set?: Array<CompanyWhereUniqueInput>;
}

export { CompanyUpdateManyWithoutUserStatusesInput as CompanyUpdateManyWithoutUserStatusesInput };
