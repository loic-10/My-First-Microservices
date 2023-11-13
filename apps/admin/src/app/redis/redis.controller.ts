import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';
import { LinkService } from '../link/link.service';
import { OrderService } from '../order/order.service';
//
@Controller('redis')
export class RedisController {
  constructor(
    // private kafkaService: KafkaService,
    private linkService: LinkService,
    private orderService: OrderService
  ) {}

  @MessagePattern('admin_topic')
  async event(@Payload() data: number[], @Ctx() context: RedisContext) {
    console.log({ data, context });
    // const { key, value } = message || {};
    // try {
    //   await this[key.toString()](value);
    // } catch ({ message: error }) {
    //   // await this.kafkaService.save({ key, value, error });
    // }
  }

  async linkCreated(linkCreated: any) {
    console.log({ linkCreated });
    await this.linkService.save(linkCreated);
  }

  async orderCreated(orderCreated: any) {
    console.log({ orderCreated });
    await this.orderService.save(orderCreated);
  }
}
