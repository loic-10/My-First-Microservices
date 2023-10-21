import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import * as redisStore from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';
@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'redis',
      port: 6379,
    }),
  ],
  providers: [RedisService],
  exports: [CacheModule, RedisService],
})
export class SharedModule {}
