import { prisma } from "../../../prisma/PrismaClient";
import { TokenEntity } from "../entities/TokenEntity";

type CreateTokenDTO = {
    tokenData: Partial<TokenEntity>;
};

type FindByUserIdDTO = {
    userId: string;
};

type DeleteTokenDTO = {
    userId: string;
};

class TokensRepository {
    async create({ tokenData: { userId, token } }: CreateTokenDTO): Promise<void> {
        await prisma.tokens.create({
            data: {
                userId,
                token
            }
        });
    };

    async delete({ userId }: DeleteTokenDTO): Promise<void> {
        await prisma.tokens.delete({
            where: {
                userId
            }
        });
    };

    async findByUserId({ userId }: FindByUserIdDTO): Promise<TokenEntity> {
        const foundedToken = await prisma.tokens.findFirst({
            where: {
                userId
            }
        });

        return foundedToken;
    };

}

export { TokensRepository }