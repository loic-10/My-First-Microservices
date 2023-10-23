import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';
import { LinkService } from '../link/link.service';
import { OrderService } from '../order/order.service';
//
@Controller('kafka')
export class KafkaController {
  constructor(
    // private kafkaService: KafkaService,
    private linkService: LinkService,
    private orderService: OrderService
  ) {}

  @MessagePattern('admin_topic')
  async event(@Payload() message: KafkaMessage) {
    const { key, value } = message || {};
    try {
      await this[key.toString()](value);
    } catch ({ message: error }) {
      // await this.kafkaService.save({ key, value, error });
    }
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
