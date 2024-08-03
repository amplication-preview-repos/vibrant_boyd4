import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  profiles?: Array<Profile>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
