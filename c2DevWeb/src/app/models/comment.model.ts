import { Model, Entity, Column, ManyToOne } from '@prisma.client';

@Entity()
export class Comment extends Model {
  @Column()
  content: string;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
