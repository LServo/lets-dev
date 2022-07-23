import { UserEntity } from "../database/entities/UserEntity";
import { UsersRepository } from "../database/repositories/UsersRepository";
import { AppError } from "../shared/errors";

type TReadProfile = {
    id: string;
}

class ReadProfileService {
    async execute({ id }: TReadProfile): Promise<UserEntity> {
        const usersRepository = new UsersRepository();

        const userAlreadyExists = await usersRepository.findById({ id });
        if (!userAlreadyExists) {
            throw new AppError("User no found!", 404);
        }

        return userAlreadyExists;
    }
}

export { ReadProfileService }