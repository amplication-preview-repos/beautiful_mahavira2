import { User } from "../user/User";

export type CompStatus = {
  createdAt: Date;
  id: string;
  status?: "Completed" | "Pending" | "Denied";
  updatedAt: Date;
  user?: Array<User>;
};
