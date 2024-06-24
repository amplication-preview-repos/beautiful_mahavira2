import { CompanyUpdateManyWithoutUserStatusesInput } from "./CompanyUpdateManyWithoutUserStatusesInput";

export type UserStatusUpdateInput = {
  company?: CompanyUpdateManyWithoutUserStatusesInput;
  status?: "Completed" | "Pending" | "Denied" | null;
};
