import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORTS = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('api/v1');
  const options = {
    origin: '',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
    methods: 'GET,PUT,PATCH,POST,DELETE,OPTIONS',
    optionsSuccessStatus: 200,
    header: 'Access-Control-Allow-Origin: *',
  };

  app.enableCors(options);
  await app.listen(PORTS);
}
bootstrap();
