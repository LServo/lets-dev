import { User } from "@prisma/client";

class UserEntity implements User {
    readonly id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    password: string;
    birthDate: Date;
    cellNumber: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}

export { UserEntity }