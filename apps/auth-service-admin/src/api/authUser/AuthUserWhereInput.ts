import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AuthUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  password?: StringNullableFilter;
  username?: StringNullableFilter;
};
