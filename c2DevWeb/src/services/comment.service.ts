import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Comment } from './comment.model';

@Injectable()
export class CommentService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllComments(): Promise<Comment[]> {
    return this.prismaService.comment.findMany();
  }

  async getComment(id: string): Promise<Comment> {
    return this.prismaService.comment.findUnique({ where: { id } });
  }

  async createComment(comment: Comment): Promise<Comment> {
    return this.prismaService.comment.create({ data: comment });
  }
}