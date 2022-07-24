import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = {
    methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD']
  }
  app.enableCors(options);
  await app.listen(3000);
}
bootstrap();
