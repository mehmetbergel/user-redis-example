import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly dataSource: DataSource) {}

  async onModuleInit() {
    try {
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.query('CREATE DATABASE IF NOT EXISTS `user_db`');
      await queryRunner.release();
      console.log('Database checked or created successfully!');
    } catch (error) {
      console.error('Error creating database:', error.message);
    }
  }
}
