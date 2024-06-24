import { FieldModelCreateNestedManyWithoutCompaniesInput } from "./FieldModelCreateNestedManyWithoutCompaniesInput";
import { UserStatusCreateNestedManyWithoutCompaniesInput } from "./UserStatusCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  fields?: FieldModelCreateNestedManyWithoutCompaniesInput;
  name: string;
  totalFields: number;
  userStatuses?: UserStatusCreateNestedManyWithoutCompaniesInput;
};
