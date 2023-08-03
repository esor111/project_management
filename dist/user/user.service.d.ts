import { registerUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    registerUser(user: registerUserDto, pass: string): Promise<any>;
    findOneById3(userId: number): Promise<User>;
    findOneByemail(email: string): Promise<User>;
    findAll(): string;
    findOne(id: number): string;
    remove(id: number): string;
}
