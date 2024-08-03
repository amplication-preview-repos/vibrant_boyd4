import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  birthday?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  user?: UserWhereUniqueInput | null;
};
