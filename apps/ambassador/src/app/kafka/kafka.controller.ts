import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';
import { ProductService } from '../product/product.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { OrderService } from '../order/order.service';

@Controller('kafka')
export class KafkaController {
  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    // private kafkaService: KafkaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  @MessagePattern('ambassador_topic')
  async event(@Payload() message: KafkaMessage) {
    const { key, value } = message || {};
    try {
      await this[key.toString()](value);
    } catch ({ message: error }) {
      // await this.kafkaService.save({ key, value, error });
    }
  }

  async productCreated(productCreated: any) {
    console.log({ productCreated });
    await this.productService.save(productCreated);
    await this.cacheManager.del('products_frontend');
    await this.cacheManager.del('products_backend');
  }

  async productUpdated(productUpdated: any) {
    console.log({ productUpdated });
    await this.productService.update(productUpdated?.id, productUpdated);
    await this.cacheManager.del('products_frontend');
    await this.cacheManager.del('products_backend');
  }

  async productDeleted(productDeleted: any) {
    console.log({ productDeleted });
    await this.productService.delete(productDeleted?.id);
    await this.cacheManager.del('products_frontend');
    await this.cacheManager.del('products_backend');
  }

  async orderCreated(orderCreated: any) {
    console.log({ orderCreated });
    await this.orderService.save({
      ...orderCreated,
      total: orderCreated.ambassador_revenue,
    });
  }
}
