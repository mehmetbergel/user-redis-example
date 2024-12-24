import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(username: string): Promise<import("./user.entity").User>;
    getUsers(): Promise<any>;
}
