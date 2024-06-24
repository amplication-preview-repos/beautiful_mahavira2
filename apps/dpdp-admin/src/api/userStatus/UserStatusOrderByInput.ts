import { SortOrder } from "../../util/SortOrder";

export type UserStatusOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
