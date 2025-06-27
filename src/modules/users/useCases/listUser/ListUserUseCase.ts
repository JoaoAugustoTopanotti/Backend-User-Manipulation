import { UserEntity } from "modules/users/entities/UserEntity";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { IRequestWithPagination } from "utils/IRequestWithPagination";
import { PrismaClient } from '@prisma/client';
import { IUserDTO } from "modules/users/interface/IUserDTO";


const prisma = new PrismaClient();

@injectable()
class ListUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepoitory: IUsersRepository,
    ) { }
    async execute(request: IRequestWithPagination): Promise<{data: IUserDTO[]; total: number; totalPages: number}> {
        const { page = 1, take, search = "" } = request;
        const users = await this.usersRepoitory.list({
            page,
            take,
            orderBy: request.orderBy,
            search
        });
        return users;
    }
}

export { ListUserUseCase };