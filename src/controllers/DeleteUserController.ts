import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

class DeleteUserController {
    async control(request: Request, response: Response): Promise<Response> {
        const id = request.headers["x-users-id"] as string || request.user.id as string;
        const convertUsersIdToArray = id.split(", ");

        const deleteUserService = new DeleteUserService();

        await deleteUserService.execute({ id: convertUsersIdToArray });

        return response.status(204).send();
    }
}

export { DeleteUserController }