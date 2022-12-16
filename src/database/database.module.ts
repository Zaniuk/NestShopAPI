import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import config from '../../config';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          type: 'postgres',
          host: configService.database.host,
          port: configService.database.port,
          username: configService.database.username,
          password: configService.database.password,
          database: configService.database.name,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
