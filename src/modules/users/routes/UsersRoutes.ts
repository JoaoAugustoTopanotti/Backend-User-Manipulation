import { Router } from "express";

import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { GetUserController } from "../useCases/getUser/GetUserController";

const createUserController = new CreateUserController();
const getUserController = new GetUserController();

const usersRoutes = Router();

usersRoutes.post(
    "/create", createUserController.handle.bind(createUserController));

usersRoutes.get(
    "/findById/:id", getUserController.handle.bind(getUserController));

export { usersRoutes };