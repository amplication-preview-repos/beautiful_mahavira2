import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompStatusWhereInput = {
  id?: StringFilter;
  status?: "Completed" | "Pending" | "Denied";
  user?: UserListRelationFilter;
};
