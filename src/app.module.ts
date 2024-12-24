import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { LogsModule } from './logs/logs.module';
import { AppService } from './app.service';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'user_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    LogsModule,
    RedisModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
