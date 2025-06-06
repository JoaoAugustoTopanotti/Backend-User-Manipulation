import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserEntity } from "../entities/UserEntity";

export interface IUsersRepository {
  create(data: CreateUserDTO, token: string, createdById: string): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
}