import { CompanyCreateNestedManyWithoutUserStatusesInput } from "./CompanyCreateNestedManyWithoutUserStatusesInput";

export type UserStatusCreateInput = {
  company?: CompanyCreateNestedManyWithoutUserStatusesInput;
  status?: "Completed" | "Pending" | "Denied" | null;
};
