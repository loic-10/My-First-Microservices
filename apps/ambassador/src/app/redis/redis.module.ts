import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RedisController } from './redis.controller';
import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared/shared.module';
import { OrderModule } from '../order/order.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'redis',
          port: 6379,
        },
      },
    ]),
    ProductModule,
    SharedModule,
    OrderModule,
  ],
  controllers: [RedisController],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
