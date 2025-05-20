import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResumeModule } from './resume/resume.module';
import { JobModule } from './job/job.module';
import { User } from './user/user.entity';
import { Resume } from './resume/resume.entity';
import { Job } from './job/job.entity';
import { MatchResult } from './job/match-result.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'resume_admin',
      password: 'strongpass',
      database: 'resume_db',
      entities: [User, Resume, Job, MatchResult],
      synchronize: true, // switch to false in production
    }),
    ResumeModule,
    JobModule,
    UsersModule
  ],
  /*controllers: [UsersController],
  providers: [UsersService],*/
})
export class AppModule {}
