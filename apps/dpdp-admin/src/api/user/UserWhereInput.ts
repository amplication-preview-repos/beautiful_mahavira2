import { CompStatusListRelationFilter } from "../compStatus/CompStatusListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  compStatuses?: CompStatusListRelationFilter;
  createdAt?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  Name?: StringFilter;
  phoneNumber?: StringNullableFilter;
  roles?: StringNullableFilter;
  username?: StringFilter;
};
