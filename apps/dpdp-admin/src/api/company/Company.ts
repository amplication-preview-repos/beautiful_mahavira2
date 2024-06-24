import { FieldModel } from "../fieldModel/FieldModel";
import { UserStatus } from "../userStatus/UserStatus";

export type Company = {
  createdAt: Date;
  fields?: Array<FieldModel>;
  id: string;
  name: string;
  totalFields: number;
  updatedAt: Date;
  userStatuses?: Array<UserStatus>;
};
