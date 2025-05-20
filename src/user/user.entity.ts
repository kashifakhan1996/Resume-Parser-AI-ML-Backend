import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Resume } from '../resume/resume.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Resume, resume => resume.user)
  resumes: Resume[];
}