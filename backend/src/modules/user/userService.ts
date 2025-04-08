import { PrismaClient, UserRole } from '@prisma/client';
import { IUser } from './userInterface';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const getAllUserService = async () => {
  const result = prisma.user.findMany();
  return result;
};

export const createAdminService = async (data: IUser) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const userData = {
    email: data.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };

  const adminData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const createUser = await transactionClient.user.create({
      data: userData,
    });

    await transactionClient.admin.create({
      data: adminData,
    });

    return createUser;
  });

  return result;
};
