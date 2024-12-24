import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserLogs } from './logs.entity';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(UserLogs)
    private readonly logsRepository: Repository<UserLogs>,
  ) {}

  async logUserAction(userId: number) {
    const log = this.logsRepository.create({ user_id: userId });
    return this.logsRepository.save(log);
  }
}
