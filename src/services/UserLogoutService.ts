import { TokensRepository } from "../database/repositories/TokensRepository";

type TUserLogout = {
    userId: string;
}

class UserLogoutService {
    async execute({ userId }: TUserLogout): Promise<void> {
        const tokensRepository = new TokensRepository();

        await tokensRepository.delete({ userId })
    }
}

export { UserLogoutService }