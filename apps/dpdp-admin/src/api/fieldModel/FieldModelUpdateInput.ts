import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type FieldModelUpdateInput = {
  address?: string;
  company?: CompanyWhereUniqueInput;
  name?: string;
  password?: string;
};
