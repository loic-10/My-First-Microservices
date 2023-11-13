import { Controller } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private mailerService: MailerService) {}

  @MessagePattern('email_topic')
  async orderCompleted(
    @Payload() data: number[],
    @Ctx() context: RedisContext
  ) {
    console.log({ data, context });
    // console.log(value, { value });
    // const order: any = value;
    // console.log({ order });
    // await this.mailerService.sendMail({
    //   to: 'admin@admin.com',
    //   subject: 'An order has been completed',
    //   html: `Order #${order?.id} with a total of $${order?.total} has been completed!`,
    // });
    //
    // await this.mailerService.sendMail({
    //   to: order?.ambassador_email,
    //   subject: 'An order has been completed',
    //   html: `You earned $${order?.ambassador_revenue} from the link #${order?.code}`,
    // });
  }
}
