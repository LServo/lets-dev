import { UsersRepository } from "../database/repositories/UsersRepository";
import { AppError } from "../shared/errors";

type TDeleteUser = {
    id: string[];
}

class DeleteUserService {
    private count: number = 0;
    async execute({ id }: TDeleteUser): Promise<void> {
        const actualId = id[0];
        const usersRepository = new UsersRepository();

        const userAlreadyExists = await usersRepository.findById({ id: actualId });
        if(!userAlreadyExists) {
            throw new AppError("User not found!", 404);
        }

        await usersRepository.delete({ id: actualId });
        console.log(this.count++);

        id.shift();
        if(id && id.length > 0) {
            await this.execute({ id })
        }
    }
}

export { DeleteUserService }