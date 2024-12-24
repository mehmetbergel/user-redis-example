import { Repository } from 'typeorm';
import { UserLogs } from './logs.entity';
export declare class LogsService {
    private readonly logsRepository;
    constructor(logsRepository: Repository<UserLogs>);
    logUserAction(userId: number): Promise<UserLogs>;
}
