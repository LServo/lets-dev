import { Request, Response } from "express";
import { UserLogoutService } from "../services/UserLogoutService";

class UserLogoutController {
    async control (request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const userLogoutService = new UserLogoutService();
        
        await userLogoutService.execute({ userId: id });

        return response.status(204).send();
    }
}

export { UserLogoutController }