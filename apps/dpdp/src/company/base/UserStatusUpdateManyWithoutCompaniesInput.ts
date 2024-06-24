/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserStatusWhereUniqueInput } from "../../userStatus/base/UserStatusWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserStatusUpdateManyWithoutCompaniesInput {
  @Field(() => [UserStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserStatusWhereUniqueInput],
  })
  connect?: Array<UserStatusWhereUniqueInput>;

  @Field(() => [UserStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserStatusWhereUniqueInput],
  })
  disconnect?: Array<UserStatusWhereUniqueInput>;

  @Field(() => [UserStatusWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserStatusWhereUniqueInput],
  })
  set?: Array<UserStatusWhereUniqueInput>;
}

export { UserStatusUpdateManyWithoutCompaniesInput as UserStatusUpdateManyWithoutCompaniesInput };
