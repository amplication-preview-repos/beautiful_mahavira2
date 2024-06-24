import { UserUpdateManyWithoutCompStatusesInput } from "./UserUpdateManyWithoutCompStatusesInput";

export type CompStatusUpdateInput = {
  status?: "Completed" | "Pending" | "Denied";
  user?: UserUpdateManyWithoutCompStatusesInput;
};
