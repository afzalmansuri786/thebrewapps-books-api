import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

async function bootstrap() {
  const logger = new Logger();
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule);
  const port = configService.get('PORT') || 5000;

  app.use(helmet());
  app.enableCors({
    origin: '*',
    allowedHeaders: ['POST', 'GET', 'OPTIONS'],
  });
  await app.listen(port, () => {
    logger.log(`Server is up on port localhost:${port}`);
  });
}
bootstrap();
