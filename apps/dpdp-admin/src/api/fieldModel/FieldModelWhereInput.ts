import { StringFilter } from "../../util/StringFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type FieldModelWhereInput = {
  address?: StringFilter;
  company?: CompanyWhereUniqueInput;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  password?: StringFilter;
  updatedAt?: DateTimeFilter;
};
