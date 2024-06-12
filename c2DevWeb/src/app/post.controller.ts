import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { Post } from './post.model';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPosts(): Promise<Post[]> {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  async getPost(@Param('id') id: string): Promise<Post> {
    return this.postService.getPost(id);
  }

  @Post()
  async createPost(@Body() post: Post): Promise<Post> {
    return this.postService.createPost(post);
  }
}