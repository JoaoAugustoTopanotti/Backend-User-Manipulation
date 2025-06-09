import { Router } from "express";

import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { GetUserController } from "../useCases/getUser/GetUserController";
import { FindByEmailController } from "../useCases/findByEmail/findByEmailController";
import { UpdateUserController } from "../useCases/updateUser/UpdateUserController";
import { DeleteUserController } from "../useCases/deleteUser/DeleteUserController";
import { ListUserController } from "../useCases/listUser/ListUserController";

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const findByEmailController = new FindByEmailController();  
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const listUserController = new ListUserController();
const usersRoutes = Router();

usersRoutes.post(
    "/create", createUserController.handle.bind(createUserController));

usersRoutes.get(
    "/findById/:id", getUserController.handle.bind(getUserController));

usersRoutes.get(
    "/findByEmail", findByEmailController.handle.bind(findByEmailController)
)
usersRoutes.put(
    "/update/:id", updateUserController.handle.bind(updateUserController)
)
usersRoutes.delete(
    "/delete/:id", deleteUserController.handle.bind(deleteUserController)
)
usersRoutes.get(
    "/list", listUserController.handle.bind(listUserController)
)
export { usersRoutes };