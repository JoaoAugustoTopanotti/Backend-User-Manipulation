import { Router } from "express";

import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { GetUserController } from "../useCases/getUser/GetUserController";
import { FindByEmailController } from "../useCases/findByEmail/findByEmailController";
import { UpdateUserController } from "../useCases/updateUser/UpdateUserController";
import { DeleteUserController } from "../useCases/deleteUser/DeleteUserController";

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const findByEmailController = new FindByEmailController();  
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const usersRoutes = Router();

usersRoutes.post(
    "/create", createUserController.handle.bind(createUserController));

usersRoutes.get(
    "/findById/:id", getUserController.handle.bind(getUserController));

usersRoutes.post(
    "/findByEmail", findByEmailController.handle.bind(findByEmailController)
)
usersRoutes.post(
    "/update/:id", updateUserController.handle.bind(updateUserController)
)
usersRoutes.delete(
    "/delete", deleteUserController.handle.bind(deleteUserController)
)
export { usersRoutes };