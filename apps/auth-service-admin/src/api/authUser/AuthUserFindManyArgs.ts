import { AuthUserWhereInput } from "./AuthUserWhereInput";
import { AuthUserOrderByInput } from "./AuthUserOrderByInput";

export type AuthUserFindManyArgs = {
  where?: AuthUserWhereInput;
  orderBy?: Array<AuthUserOrderByInput>;
  skip?: number;
  take?: number;
};
