import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors";
import auth from "../../settings/auth";
import { TokensRepository } from "../../database/repositories/TokensRepository";

export async function authSecurity(request: Request, response: Response, next: NextFunction) {
    const tokensRepository = new TokensRepository();
    const authHeader = request.headers.authorization;
    if(!authHeader) {
        throw new AppError("Token not found!", 401);
    }

    const [ ,token ] = authHeader.split(" ");

    try {
        const { sub: id } = verify(token, auth.secret) as { sub: string };
        const { token: tokenDB } = await tokensRepository.findByUserId({ userId: id })

        if (token !== tokenDB) {
            throw new Error();
        }
        
        request.user = {
            id
        };

        next();

    } catch (error) {
        throw new AppError("Invalid Token", 401);
    }
}