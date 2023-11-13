import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';
import { ProductService } from '../product/product.service';
import { LinkService } from '../link/link.service';
import { OrderService } from '../order/order.service';

@Controller('redis')
export class RedisController {
  constructor(
    private productService: ProductService,
    private linkService: LinkService,
    private orderService: OrderService
  ) {}

  @MessagePattern('checkout_topic')
  async event(@Payload() data: number[], @Ctx() context: RedisContext) {
    console.log({ data, context });
    // const { key, value } = message || {};
    // try {
    //   await this[key.toString()](value);
    // } catch ({ message: error }) {
    //   // await this.kafkaService.save({ key, value, error });
    // }
  }

  async productCreated(productCreated: any) {
    console.log({ productCreated });
    await this.productService.save(productCreated);
  }

  async productUpdated(productUpdated: any) {
    console.log({ productUpdated });
    await this.productService.update(productUpdated?.id, productUpdated);
  }

  async productDeleted(productDeleted: any) {
    console.log({ productDeleted });
    await this.productService.delete(productDeleted?.id);
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
