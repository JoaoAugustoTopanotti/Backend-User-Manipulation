import { DeleteUserDTO } from "modules/users/dtos/DeleteUserDTO";
import { UserEntity } from "modules/users/entities/UserEntity";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}
    async execute(deletedUser: DeleteUserDTO, deletedById: string): Promise<UserEntity> {
        const userId = await this.usersRepository.findById(deletedUser.id)
        if (!userId) {
            throw new Error('User not found');
        }
        if (userId.isDeleted) {
            throw new Error('User already deleted');
        }
        const user = await this.usersRepository.delete(deletedUser, deletedById);
        return user;
    }
}

export { DeleteUserUseCase }