import { Company } from "../company/Company";

export type UserStatus = {
  company?: Array<Company>;
  createdAt: Date;
  id: string;
  status?: "Completed" | "Pending" | "Denied" | null;
  updatedAt: Date;
};
