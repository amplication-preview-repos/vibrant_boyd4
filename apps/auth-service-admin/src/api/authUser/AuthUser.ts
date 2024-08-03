export type AuthUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  isActive: boolean | null;
  password: string | null;
  updatedAt: Date;
  username: string | null;
};
