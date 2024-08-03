import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  birthday?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  user?: UserWhereUniqueInput | null;
};
