import { CompStatusWhereInput } from "./CompStatusWhereInput";
import { CompStatusOrderByInput } from "./CompStatusOrderByInput";

export type CompStatusFindManyArgs = {
  where?: CompStatusWhereInput;
  orderBy?: Array<CompStatusOrderByInput>;
  skip?: number;
  take?: number;
};
