import { Router } from "express";

import { CreateUserController } from "../useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.post(
    "/create", createUserController.handle.bind(createUserController));

export { usersRoutes };