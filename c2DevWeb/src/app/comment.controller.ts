import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.model';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async getAllComments(): Promise<Comment[]> {
    return this.commentService.getAllComments();
  }

  @Get(':id')
  async getComment(@Param('id') id: string): Promise<Comment> {
    return this.commentService.getComment(id);
  }

  @Post()
  async createComment(@Body() comment: Comment): Promise<Comment> {
    return this.commentService.createComment(comment);
  }
}