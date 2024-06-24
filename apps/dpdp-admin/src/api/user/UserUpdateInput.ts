import { CompStatusUpdateManyWithoutUsersInput } from "./CompStatusUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  compStatuses?: CompStatusUpdateManyWithoutUsersInput;
  email?: string;
  Name?: string;
  password?: string;
  phoneNumber?: string | null;
  roles?: string | null;
  username?: string;
};
