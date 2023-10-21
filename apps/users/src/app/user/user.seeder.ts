import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { createConnection } from 'typeorm';
import { UserService } from './user.service';
import { User } from './user';

(async () => {
  const app = await NestFactory.createApplicationContext(AppModule);

  const userService = app.get(UserService);

  const connection = await createConnection({
    name: 'old',
    type: 'mysql',
    host: 'host.docker.internal',
    port: 33066,
    username: 'root',
    password: 'root',
    database: 'ambassador',
    entities: [User],
  });

  const users = await connection.manager.find(User);

  for (const user of users) {
    await userService.save(user);
  }

  process.exit();
})();
