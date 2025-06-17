import { UserEntity } from "../entities/UserEntity";

export interface IUserDTO extends Omit<UserEntity, "updatedAt" | "createdAt" | "createdById" | "updatedById" | "deletedAt" | "deletedById" | "isDeleted"> {

} 