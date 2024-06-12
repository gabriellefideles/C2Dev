import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }
}