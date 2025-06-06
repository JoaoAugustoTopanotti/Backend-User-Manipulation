import { inject, injectable } from 'tsyringe';

import { UserEntity } from 'modules/users/entities/UserEntity';
import { IUsersRepository } from 'modules/users/repositories/IUsersRepository';
import { CreateUserDTO } from 'modules/users/dtos/CreateUserDTO';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}
    async execute(newUser: CreateUserDTO, token:string, createdById:string): Promise<UserEntity> {
        const existingUser = await this.usersRepository.findByEmail(newUser.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        const user = await this.usersRepository.create(newUser, token, createdById);
        return user;
    }
}
    
export { CreateUserUseCase };