import { UpdateUserDTO } from "modules/users/dtos/UpdateUserDTO";
import { UserEntity } from "modules/users/entities/UserEntity";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) { }
    async execute(updatedUser: UpdateUserDTO, token: string, updatedById: string, id: string): Promise<UserEntity> {
        const userId = await this.usersRepository.findById(updatedUser.id);
        const valueToCompare = {
            id: userId.id,
            name: userId.name,
            contact: userId.contact,
            nationalId: userId.nationalId,
            birthDate: userId.birthDate.toISOString(),
            password: userId.password,
        };
        function isEqual(obj1: any, obj2: any): boolean {
            return Object.keys(obj1).every((key) => {
                if (key === 'birthDate') {
                    return new Date(obj1[key]).getTime() === new Date(obj2[key]).getTime();
                }
                return obj1[key] === obj2[key];
            });
        }
        if (isEqual(updatedUser, valueToCompare)) {
        throw new Error("No changes were made to the user data.");
    }
        console.log("Value to compare: ", valueToCompare)
        console.log("Updated user: ", updatedUser)
        const user = await this.usersRepository.update(updatedUser, token, updatedById, id);
        return user;
    }
}
export { UpdateUserUseCase }