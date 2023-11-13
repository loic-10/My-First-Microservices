import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RedisError {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  error: string;
}
