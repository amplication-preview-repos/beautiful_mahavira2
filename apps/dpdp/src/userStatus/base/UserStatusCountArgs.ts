/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserStatusWhereInput } from "./UserStatusWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UserStatusCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserStatusWhereInput,
  })
  @Field(() => UserStatusWhereInput, { nullable: true })
  @Type(() => UserStatusWhereInput)
  where?: UserStatusWhereInput;
}

export { UserStatusCountArgs as UserStatusCountArgs };
