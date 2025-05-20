import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Resume } from '../resume/resume.entity';
import { Job } from './job.entity';

@Entity()
export class MatchResult {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Resume)
  resume: Resume;

  @ManyToOne(() => Job)
  job: Job;

  @Column('float')
  matchScore: number;
}