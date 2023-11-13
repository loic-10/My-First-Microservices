import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { LinkModule } from './link/link.module';
import { OrderModule } from './order/order.module';
import { KafkaModule } from './kafka/kafka.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      // port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    LinkModule,
    OrderModule,
    KafkaModule,
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
