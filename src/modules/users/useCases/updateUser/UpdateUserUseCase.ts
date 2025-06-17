import { UpdateUserDTO } from "modules/users/dtos/UpdateUserDTO";
import { UserEntity } from "modules/users/entities/UserEntity";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import isEqualObjects from "utils/isEqualObjects";


@injectable()
class UpdateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }
    async execute(updatedUser: UpdateUserDTO, token: string, updatedById: string, id: string): Promise<UserEntity> {
        console.log("updatedUser", updatedUser)
        console.log("token", token)
        console.log("updatedById", updatedById)
        console.log("id", id)
        
        const userId = await this.usersRepository.findById(id);
        console.log("userId", userId)
        const valueToCompare = {
            id: userId.id,
            name: userId.name,
            contact: userId.contact,
            nationalId: userId.nationalId,
            birthDate: userId.birthDate.toISOString(),
            password: userId.password,
        };
        if (isEqualObjects(updatedUser, valueToCompare)) {
        throw new Error("No changes were made to the user data.");
    }
        console.log("Value to compare: ", valueToCompare)
        console.log("Updated user: ", updatedUser)
        const user = await this.usersRepository.update(updatedUser, token, updatedById, id);
        return user;
    }
}
export { UpdateUserUseCase }