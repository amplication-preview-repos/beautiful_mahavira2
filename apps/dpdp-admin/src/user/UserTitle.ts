import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "Name";

export const UserTitle = (record: TUser): string => {
  return record.Name?.toString() || String(record.id);
};
