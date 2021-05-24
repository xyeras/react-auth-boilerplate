type User = {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

type InitialStateType = {
    users: User [];
    user: User | undefined;
    alert: boolean;
    saveUser: (user:User) => void;
}