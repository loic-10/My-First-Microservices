/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'redis',
        port: 6379,
      },
    }
    // {
    //   transport: Transport.KAFKA,
    //   options: {
    //     client: {
    //       brokers: ['pkc-lzvrd.us-west4.gcp.confluent.cloud:9092'],
    //       ssl: true,
    //       sasl: {
    //         mechanism: 'plain',
    //         username: 'KHD54GDRKYWMIE6A',
    //         password:
    //           'XOvwNEeRzGQ3GpbIkgZ28fckhqPZoVWOJx4bZ+ymmYBk5TeFEl2utc4L0ET9D8Ut',
    //       },
    //     },
    //     consumer: {
    //       groupId: 'ambassador-consumer',
    //     },
    //   },
    // }
  );
  app.listen().then(
    (value) => Logger.log({ ambassador: 'App is consuming...', value }),
    (reason) => Logger.error({ reason })
  );
}

bootstrap();
