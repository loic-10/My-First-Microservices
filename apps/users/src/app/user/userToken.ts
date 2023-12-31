import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserToken {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  user_id: number;

  @Column()
  token: string;

  @Column()
  created_at: Date;

  @Column()
  expired_at: Date;
}
