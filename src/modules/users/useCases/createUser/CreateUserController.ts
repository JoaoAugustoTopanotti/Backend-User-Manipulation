import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';
import { CreateUserDTO } from 'modules/users/dtos/CreateUserDTO';
export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const createUserDTO: CreateUserDTO = request.body;

            const {token, user} = request.headers;

            const createUserUseCase = container.resolve(CreateUserUseCase);

            const newUser = await createUserUseCase.execute(createUserDTO, token as string, user as string);

            const name = newUser.name;

            return response.status(201).json({name, message: "User created successfully!"});
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
}