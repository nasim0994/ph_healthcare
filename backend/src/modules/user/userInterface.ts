import { UserRole } from '@prisma/client';

export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  needPasswordChange: boolean;
  phone: string;
  role: UserRole;
  status: string;
  isDeleted: boolean;
  profilePhoto: string;
};
