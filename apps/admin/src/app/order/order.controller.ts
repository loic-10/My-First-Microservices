import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { AuthGuard } from '../user/auth.guard';

@UseGuards(AuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  all() {
    return this.orderService.find({
      relations: ['order_items'],
    });
  }
}
