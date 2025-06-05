import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserEntity } from "../entities/UserEntity";

export interface IUsersRepository {
  create(data: CreateUserDTO, token: string, createdById: string): Promise<UserEntity>;
}