import { CompStatusCreateNestedManyWithoutUsersInput } from "./CompStatusCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  compStatuses?: CompStatusCreateNestedManyWithoutUsersInput;
  email: string;
  Name: string;
  password: string;
  phoneNumber?: string | null;
  roles?: string | null;
  username: string;
};
