import { UserEntity } from "modules/users/entities/UserEntity";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { IRequestWithPagination } from "utils/IRequestWithPagination";
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

@injectable()
class ListUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepoitory: IUsersRepository,
    ) { }
    async execute(request: IRequestWithPagination): Promise<{data: UserEntity[]; total: number; totalPages: number}> {
        const { page = 1, take = 10 } = request;
        const users = await this.usersRepoitory.list({
            page,
            take,
            orderBy: request.orderBy,
            search: request.search
        });
        return users;
    }
}

export { ListUserUseCase };