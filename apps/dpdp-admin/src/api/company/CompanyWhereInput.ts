import { FieldModelListRelationFilter } from "../fieldModel/FieldModelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserStatusListRelationFilter } from "../userStatus/UserStatusListRelationFilter";

export type CompanyWhereInput = {
  fields?: FieldModelListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  totalFields?: IntFilter;
  userStatuses?: UserStatusListRelationFilter;
};
