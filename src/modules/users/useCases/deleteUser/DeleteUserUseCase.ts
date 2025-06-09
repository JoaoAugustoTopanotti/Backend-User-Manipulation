import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}
    async execute(id:string, deletedById: string): Promise<void> {
        const user = await this.usersRepository.remove(id, deletedById);
    }
}

export { DeleteUserUseCase };
