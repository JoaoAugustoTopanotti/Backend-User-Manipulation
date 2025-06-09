import { Prisma, PrismaClient } from '@prisma/client';
import { CreateUserDTO } from 'modules/users/dtos/CreateUserDTO';
import { UpdateUserDTO } from 'modules/users/dtos/UpdateUserDTO';
import { UserEntity } from 'modules/users/entities/UserEntity';
import { IUsersRepository } from 'modules/users/repositories/IUsersRepository';
import { IRequestWithPagination } from 'utils/IRequestWithPagination';

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
  async remove(id: string, deletedById: string): Promise<void> {
    const deletedUser = await prisma.users.update({ 
      where: { id },
      data: {
        isDeleted: true,
        deletedAt: new Date(),
        updatedAt: new Date(),
        deletedBy: {
          connect: { id: deletedById }
        },
        updatedBy: {
          connect: { id: deletedById }
        } 
      },
    });
  }
  async list({
    page = 1,
    take = 10,
    search,
    orderBy
  }: IRequestWithPagination): Promise<{ data: UserEntity[]; total: number; totalPages: number }> {
    const offset = (page - 1) * take;
    const whereClause = search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: Prisma.QueryMode.insensitive
              }
            },
            {
              contact: {
                startsWith: search
              }
            },
            {
              email: {
                contains: search,
                mode: Prisma.QueryMode.insensitive
              }
            }
          ]
        }
      : undefined;
    const orderByClause = orderBy
      ? {
          [orderBy.field]: orderBy.direction
        }
      : {
          name: 'asc' as const
        };

    const [users, total] = await Promise.all([
      prisma.users.findMany({
        skip: offset,
        take,
        where: whereClause,
        orderBy: orderByClause
      }),
      prisma.users.count({ where: whereClause }) as Promise<number>
    ]);

    const totalPages = Math.ceil(total / take);

    return {
      data: users as UserEntity[],
      total,
      totalPages
    };
  }
}
export { UsersRepository };
