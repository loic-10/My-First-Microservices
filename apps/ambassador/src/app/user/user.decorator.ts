import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserService } from './user.service';

export const User = createParamDecorator(
  async (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const userService = new UserService();
    return await userService.get(`user/ambassador`, request.cookies['jwt']);
  }
);
