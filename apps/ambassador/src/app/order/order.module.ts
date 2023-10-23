import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
