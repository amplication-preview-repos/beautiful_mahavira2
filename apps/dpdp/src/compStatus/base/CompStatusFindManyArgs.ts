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
import { CompStatusWhereInput } from "./CompStatusWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CompStatusOrderByInput } from "./CompStatusOrderByInput";

@ArgsType()
class CompStatusFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CompStatusWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CompStatusWhereInput, { nullable: true })
  @Type(() => CompStatusWhereInput)
  where?: CompStatusWhereInput;

  @ApiProperty({
    required: false,
    type: [CompStatusOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CompStatusOrderByInput], { nullable: true })
  @Type(() => CompStatusOrderByInput)
  orderBy?: Array<CompStatusOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CompStatusFindManyArgs as CompStatusFindManyArgs };
