import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@nestjs-modules/ioredis';
import { Redis } from 'ioredis';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRedis() private readonly redisClient: Redis,
  ) {}

  private readonly REDIS_KEY_PREFIX = 'user:';

  async createUser(username: string) {
    const user = this.userRepository.create({ username });
    const savedUser = await this.userRepository.save(user);
    await this.redisClient.set(
      `${this.REDIS_KEY_PREFIX}:${savedUser.id}`,
      JSON.stringify(savedUser),
      'EX',
      30,
    );
    return savedUser;
  }

  async getAllUsers() {
    const cachedUsers = await this.redisClient.get(this.REDIS_KEY_PREFIX);
    console.log('cachedUsers :', cachedUsers);

    if (cachedUsers) {
      return JSON.parse(cachedUsers);
    }

    const users = await this.userRepository.find();

    await this.redisClient.set(
      this.REDIS_KEY_PREFIX,
      JSON.stringify(users),
      'EX',
      30,
    );

    return users;
  }
}
