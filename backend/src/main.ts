import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // para acesso do frontend
  await app.listen(3000);
  console.log('Backend rodando em http://localhost:3000');
}
bootstrap();
