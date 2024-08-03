import { User } from "../user/User";

export type Profile = {
  birthday: Date | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
  user?: User | null;
};
