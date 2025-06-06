import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByEmailUseCase } from "./findByEmailUseCase";

class FindByEmailController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { email } = request.body;

        const createFindByEmailUseCase = container.resolve(FindByEmailUseCase);

        const user = await createFindByEmailUseCase.execute(email);

        return response.status(200).json(user);
    }
}

export { FindByEmailController };