import { error } from "console";
import { UserEntity } from "modules/users/entities/UserEntity";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class FindByEmailUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }
    async execute(email: string): Promise<UserEntity> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            return new error("User not found", "error_user_not_found", 400);
        }
        return user;
    }
}

export { FindByEmailUseCase }