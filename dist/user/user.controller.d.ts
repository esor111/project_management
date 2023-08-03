import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): string;
    findOne(id: string): string;
    remove(id: string): string;
}
