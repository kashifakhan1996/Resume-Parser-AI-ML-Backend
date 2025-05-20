import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("jsonb")
  parsedJson: any;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.resumes)
  user: User;
}