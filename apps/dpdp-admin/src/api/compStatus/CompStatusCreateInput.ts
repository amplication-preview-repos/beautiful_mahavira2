import { UserCreateNestedManyWithoutCompStatusesInput } from "./UserCreateNestedManyWithoutCompStatusesInput";

export type CompStatusCreateInput = {
  status: "Completed" | "Pending" | "Denied";
  user?: UserCreateNestedManyWithoutCompStatusesInput;
};
