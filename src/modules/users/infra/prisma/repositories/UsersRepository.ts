import { PrismaClient } from '@prisma/client';
import { CreateUserDTO } from 'modules/users/dtos/CreateUserDTO';
import { UserEntity } from 'modules/users/entities/UserEntity';
import { IUsersRepository } from 'modules/users/repositories/IUsersRepository';

const prisma = new PrismaClient();

class UsersRepository implements IUsersRepository {
  async create({
    name,
    contact,
    nationalId,
    birthDate,
    password,
    email
  }: CreateUserDTO, token: string, createdById: string): Promise<UserEntity> {
    return await prisma.users.create({
      data: {
        name,
        birthDate,
        contact,
        nationalId,
        email,
        password,
        token,
        createdAt: new Date(),
        updatedAt: new Date(),
        isDeleted: false,
        createdBy: {
          connect: { id: createdById }
        }
      }
    });
  }
  async findById(id: string): Promise<UserEntity> {
    const user = await prisma.users.findUnique({
      where: { id },
    });
    return user;
  }
}
export { UsersRepository };