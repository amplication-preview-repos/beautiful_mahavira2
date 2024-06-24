import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserStatusWhereInput = {
  company?: CompanyListRelationFilter;
  id?: StringFilter;
  status?: "Completed" | "Pending" | "Denied";
};
