import { OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';
export declare class AppService implements OnModuleInit {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    onModuleInit(): Promise<void>;
}
