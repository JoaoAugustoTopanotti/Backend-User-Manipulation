import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { error } from "console";
import { UserEntity } from "modules/users/entities/UserEntity";

@injectable()
class GetUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute(userId: string): Promise<UserEntity> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      return new error("User not found", "error_user_not_found", 400);
    }
    return user;
  }
}

export { GetUserUseCase };
