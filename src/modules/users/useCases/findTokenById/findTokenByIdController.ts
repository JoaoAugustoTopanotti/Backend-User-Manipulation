import { container } from "tsyringe";
import { Request, Response } from "express";
import { FindTokenByIdUseCase } from "./findTokenByIdUseCase";

class FindTokenByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    
    const { id } = request.params;

    const findTokenByIdUseCase = container.resolve(FindTokenByIdUseCase);

    const user = await findTokenByIdUseCase.execute(id);

    return response.status(200).json(user);
  }
}

export { FindTokenByIdController };