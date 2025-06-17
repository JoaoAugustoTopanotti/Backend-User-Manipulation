import { UpdateUserDTO } from "modules/users/dtos/UpdateUserDTO";
import { container } from "tsyringe";
import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class  UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const updateUserDTO: UpdateUserDTO = request.body;
            
            const { token, updatedbyid} = request.headers;

            const {id} = request.params;

            const updateUserUseCase = container.resolve(UpdateUserUseCase);

            const updatedUser = await updateUserUseCase.execute(updateUserDTO, token as string, updatedbyid as string, id as string);

            return response.status(200).json({
                updatedUser,
                message: "User updated suceessfully!"
            })
        } catch (error) {
            return response.status(500).json({ message: error.message})
        }
    }
}