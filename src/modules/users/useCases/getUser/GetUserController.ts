import { container } from "tsyringe";
import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    
    const { id } = request.params;

    const getUserUseCase = container.resolve(GetUserUseCase);

    const user = await getUserUseCase.execute(id);

    return response.status(200).json(user);
  }
}

export { GetUserController };