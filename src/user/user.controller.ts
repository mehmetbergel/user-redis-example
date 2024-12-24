import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body('username') username: string) {
    return this.userService.createUser(username);
  }

  @Get()
  async getUsers() {
    return this.userService.getAllUsers();
  }
}
