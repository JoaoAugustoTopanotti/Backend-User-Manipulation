import { PrismaClient } from '@prisma/client';
import { CreateUserDTO } from 'modules/users/dtos/CreateUserDTO';
import { DeleteUserDTO } from 'modules/users/dtos/DeleteUserDTO';
import { UpdateUserDTO } from 'modules/users/dtos/UpdateUserDTO';
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
  async findByEmail(email: string): Promise<UserEntity> {
    const user = await prisma.users.findUnique({
      where: { email }, 
    })
    return user;
  }
  async update({
    name,
    contact,
    nationalId,
    birthDate,
    password,
  }: UpdateUserDTO, token: string, updatedById: string, id: string): Promise<UserEntity> {
    const user = {
        id,
        name,
        contact,
        nationalId,
        birthDate,
        password,
        updatedAt: new Date(),
        isDeleted: false,
    }
    return await prisma.users.update({
      where: { id },
      data: {
        ...user,
        token,
        updatedBy: {
          connect: { id: updatedById }
        }
      }
    });
  }
  async delete({
    id,
  }: DeleteUserDTO, deletedById: string): Promise<UserEntity> {
    const user = {
      id,
      isDeleted: true,
      deletedAt: new Date(),
      updatedAt: new Date(),
    }
    return await prisma.users.update({
      where: { id },
      data: {
        ...user,
        deletedBy: {
          connect: { id: deletedById }
        },
        updatedBy: {
          connect: { id: deletedById}
        }
      }
    });
  }
}
export { UsersRepository };