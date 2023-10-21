import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      // port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities:
        process.env.DATABASE_AUTO_LOAD_ENTITIES?.toString() === 'true',
      synchronize: process.env.DATABASE_SYNCHRONIZE?.toString() === 'true',
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
