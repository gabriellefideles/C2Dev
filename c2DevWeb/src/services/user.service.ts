import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async getUser(id: string): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async createUser(user: User): Promise<User> {
    return this.prismaService.user.create({ data: user });
  }
}