import { Router } from "express";

import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { GetUserController } from "../useCases/getUser/GetUserController";
import { FindByEmailController } from "../useCases/findByEmail/findByEmailController";

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const findByEmailController = new FindByEmailController();  

const usersRoutes = Router();

usersRoutes.post(
    "/create", createUserController.handle.bind(createUserController));

usersRoutes.get(
    "/findById/:id", getUserController.handle.bind(getUserController));

usersRoutes.post(
    "/findByEmail", findByEmailController.handle.bind(FindByEmailController)
)

export { usersRoutes };