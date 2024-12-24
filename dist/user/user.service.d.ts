import { Redis } from 'ioredis';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly redisClient;
    constructor(userRepository: Repository<User>, redisClient: Redis);
    private readonly REDIS_KEY_PREFIX;
    createUser(username: string): Promise<User>;
    getAllUsers(): Promise<any>;
}
