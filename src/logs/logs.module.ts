import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsService } from './logs.service';
import { UserLogs } from './logs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLogs])],
  providers: [LogsService],
  exports: [LogsService],
})
export class LogsModule {}
