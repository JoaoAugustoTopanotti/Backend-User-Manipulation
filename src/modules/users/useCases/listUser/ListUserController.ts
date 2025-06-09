import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserUseCase } from "./ListUserUseCase";
import { IRequestWithPagination, OrderBy } from "utils/IRequestWithPagination";

class ListUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const query = request.query as {
            page?: string;
            take?: string;
            search?: string;
            'orderBy[field]'?: string;
            'orderBy[direction]'?: string;
        }

        const orderBy: OrderBy | undefined =
            query['orderBy[field]'] && query['orderBy[direction]']
                ? {
                    field: query['orderBy[field]'],
                    direction: query['orderBy[direction]'] as 'asc' | 'desc',
                }
                : undefined;

        const params: IRequestWithPagination = {
            page: Number(query.page),
            take: Number(query.take),
            search: query.search,
            orderBy
        }

        const listUserUseCase = container.resolve(ListUserUseCase);

        const users = await listUserUseCase.execute(params);

        return response.status(200).json({ users });

    }
}

export { ListUserController };