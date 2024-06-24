import { FieldModelUpdateManyWithoutCompaniesInput } from "./FieldModelUpdateManyWithoutCompaniesInput";
import { UserStatusUpdateManyWithoutCompaniesInput } from "./UserStatusUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  fields?: FieldModelUpdateManyWithoutCompaniesInput;
  name?: string;
  totalFields?: number;
  userStatuses?: UserStatusUpdateManyWithoutCompaniesInput;
};
