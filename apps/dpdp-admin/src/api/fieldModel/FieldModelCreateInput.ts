import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type FieldModelCreateInput = {
  address: string;
  company: CompanyWhereUniqueInput;
  name: string;
  password: string;
};
