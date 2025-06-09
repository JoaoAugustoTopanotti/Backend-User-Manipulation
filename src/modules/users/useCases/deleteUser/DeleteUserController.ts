import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


export class DeleteUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const { deletedbyid } = request.headers;

            const deleteUserUseCase = container.resolve(DeleteUserUseCase);

            await deleteUserUseCase.execute(id, deletedbyid as string);

            return response.status(200).json({ message: "User deleted successfully!"})
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
}