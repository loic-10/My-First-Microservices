import { forwardRef, Module } from '@nestjs/common';
import { KafkaService } from './kafka.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaController } from './kafka.controller';
import { ProductModule } from '../product/product.module';
import { LinkModule } from '../link/link.module';
import { OrderModule } from '../order/order.module';

@Module({
  imports: [
    // TypeOrmModule.forFeature([KafkaError]),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['pkc-lzvrd.us-west4.gcp.confluent.cloud:9092'],
            ssl: true,
            sasl: {
              mechanism: 'plain',
              username: 'KHD54GDRKYWMIE6A',
              password:
                'XOvwNEeRzGQ3GpbIkgZ28fckhqPZoVWOJx4bZ+ymmYBk5TeFEl2utc4L0ET9D8Ut',
            },
          },
        },
      },
    ]),
    ProductModule,
    LinkModule,
    forwardRef(() => OrderModule),
  ],
  controllers: [KafkaController],
  providers: [KafkaService],
  exports: [KafkaService],
})
export class KafkaModule {}
