import { AuthUser as TAuthUser } from "../api/authUser/AuthUser";

export const AUTHUSER_TITLE_FIELD = "username";

export const AuthUserTitle = (record: TAuthUser): string => {
  return record.username?.toString() || String(record.id);
};
