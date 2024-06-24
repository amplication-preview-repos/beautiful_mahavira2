import { CompStatus } from "../compStatus/CompStatus";

export type User = {
  compStatuses?: Array<CompStatus>;
  createdAt: Date;
  email: string;
  id: string;
  Name: string;
  phoneNumber: string | null;
  roles: string | null;
  updatedAt: Date;
  username: string;
};
