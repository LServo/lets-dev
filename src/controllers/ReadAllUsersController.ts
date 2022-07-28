import { Request, Response } from "express";
import { ReadAllUsersService } from "../services/ReadAllUsersService";

class ReadAllUsersController {
    async control(request: Request, response: Response): Promise<Response> {
        const { id } = request.user

        const readAllUsersService = new ReadAllUsersService();

        const getAllUsers = await readAllUsersService.execute({ userId: id });

        return response.status(200).json(getAllUsers);
    }
}

export { ReadAllUsersController }