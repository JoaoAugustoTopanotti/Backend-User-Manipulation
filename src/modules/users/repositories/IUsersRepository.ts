import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { DeleteUserDTO } from "../dtos/DeleteUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { UserEntity } from "../entities/UserEntity";

export interface IUsersRepository {
  create(data: CreateUserDTO, token: string, createdById: string): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
  update(data: UpdateUserDTO, token:string, updatedById: string, id: string): Promise<UserEntity>;
  delete(data: DeleteUserDTO, deletedById: string): Promise<UserEntity>;
}