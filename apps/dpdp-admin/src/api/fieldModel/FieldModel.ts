import { Company } from "../company/Company";

export type FieldModel = {
  address: string;
  company?: Company;
  createdAt: Date;
  id: string;
  name: string;
  password: string;
  updatedAt: Date;
};
