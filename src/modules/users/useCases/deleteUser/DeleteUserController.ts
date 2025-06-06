import { DeleteUserDTO } from "modules/users/dtos/DeleteUserDTO";
import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


export class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            const deleteUserDTO: DeleteUserDTO = request.body;

            const { deletedbyid } = request.headers;

            const deleteUserUseCase = container.resolve(DeleteUserUseCase);

            const deletedUser = await deleteUserUseCase.execute(deleteUserDTO, deletedbyid as string);
            
            return response.status(200).json({ message: "User deleted successfully!", deletedUser})
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
}