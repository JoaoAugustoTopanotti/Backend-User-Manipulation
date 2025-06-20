import { Prisma, PrismaClient } from '@prisma/client';
import { CreateUserDTO } from 'modules/users/dtos/CreateUserDTO';
import { UpdateUserDTO } from 'modules/users/dtos/UpdateUserDTO';
import { UserEntity } from 'modules/users/entities/UserEntity';
import { IUserDTO } from 'modules/users/interface/IUserDTO';
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
    try {
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
    } catch (error) {
      console.error("Erro ao criar usuário no banco:", error);
      throw error;
    }
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
    console.log("User update", user)
    return await prisma.users.update({
      where: { id },
      data: {
        ...user,
        updatedBy: {
          connect: { id: updatedById }
        }
      }
    });
  }
  async remove(id: string, deletedById: string): Promise<void> {
    try {
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

      console.log("Usuário marcado como deletado com sucesso:", deletedUser);
    } catch (error) {
      console.error("Erro ao tentar deletar usuário:", error);
      throw error; // relança o erro, se você quiser tratar em outro lugar também
    }
  }
  async list({
    page = 1,
    take = 10,
    search,
    orderBy
  }: IRequestWithPagination): Promise<{ data: IUserDTO[]; total: number; totalPages: number }> {
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
        orderBy: orderByClause,
        omit: {
          deletedAt: true,
          updatedAt: true,
          createdAt: true,
          createdById: true,
          updatedById: true,
          deletedById: true,
        }
      }),
      prisma.users.count({ where: whereClause }) as Promise<number>
    ]);

    const totalPages = Math.ceil(total / take);

    return {
      data: users,
      total,
      totalPages,
    };
  };
  async findTokenById(id: string): Promise<string | null> {
    console.log("Id", id)
    const user = await prisma.users.findUnique({
      where: { id },
      select: { token: true },
    });
    console.log("User", user)

    return user?.token ?? null;
  }
}
export { UsersRepository };
