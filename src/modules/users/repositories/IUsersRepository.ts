import { IRequestWithPagination, OrderBy } from "utils/IRequestWithPagination";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { UserEntity } from "../entities/UserEntity";

export interface IUsersRepository {
  create(data: CreateUserDTO, token: string, createdById: string): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity>;
  update(data: UpdateUserDTO, token:string, updatedById: string, id: string): Promise<UserEntity>;
  remove(id: string, deletedById: string): Promise<void>;
  list(params: IRequestWithPagination): Promise<{data: UserEntity[];total: number;totalPages: number;
  }>;
}