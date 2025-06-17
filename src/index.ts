import express from "express";
import cors from "cors";
import "reflect-metadata";
import { usersRoutes } from "./modules/users/routes/UsersRoutes";
import { container } from "tsyringe";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";
import { UsersRepository } from "modules/users/infra/prisma/repositories/UsersRepository";

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());

container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);

app.use("/users", usersRoutes)


app.listen(3001, () => console.log("Server running at http://localhost:3001"));
