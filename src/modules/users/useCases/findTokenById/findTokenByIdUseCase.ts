import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindTokenByIdUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute(id: string): Promise<string|null> {
    const user = await this.usersRepository.findTokenById(id);

    if (!user) {
      throw new Error("Token not found");
    }
    return user;
  }
}

export { FindTokenByIdUseCase };
