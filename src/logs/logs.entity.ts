import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('user_logs')
export class UserLogs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @CreateDateColumn()
  created_at: Date;
}
