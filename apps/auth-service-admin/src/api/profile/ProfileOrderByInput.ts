import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  birthday?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
