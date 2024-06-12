import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Post } from './post.model';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllPosts(): Promise<Post[]> {
    return this.prismaService.post.findMany();
  }

  async getPost(id: string): Promise<Post> {
    return this.prismaService.post.findUnique({ where: { id } });
  }

  async createPost(post: Post): Promise<Post> {
    return this.prismaService.post.create({ data: post });
  }
}