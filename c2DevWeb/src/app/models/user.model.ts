import { Model, Entity, Column } from '@prisma/client';

@Entity()
export class User extends Model {
  @Column()
  name: string;

  @Column()
  email: string;
}
