import { CompStatus as TCompStatus } from "../api/compStatus/CompStatus";

export const COMPSTATUS_TITLE_FIELD = "id";

export const CompStatusTitle = (record: TCompStatus): string => {
  return record.id?.toString() || String(record.id);
};
