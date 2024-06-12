import { Model, Entity, Column, OneToMany } from '@prisma/client';

@Entity()
export class Post extends Model {
  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}