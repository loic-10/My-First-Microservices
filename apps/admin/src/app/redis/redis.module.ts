import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RedisController } from './redis.controller';
import { LinkModule } from '../link/link.module';
import { OrderModule } from '../order/order.module';
// import { OrderModule } from '../order/order.module';

@Module({
  imports: [
    // TypeOrmModule.forFeature([KafkaError]),
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
    LinkModule,
    OrderModule,
  ],
  controllers: [RedisController],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
