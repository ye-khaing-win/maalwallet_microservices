import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { TOKENS_PACKAGE_NAME } from '@app/contracts/proto/tokens';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: TOKENS_PACKAGE_NAME,
      protoPath: join(process.cwd(), 'proto/tokens.proto'),
      url: 'tokens-service:50052',
    },
  });

  // app.connectMicroservice<MicroserviceOptions>(
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: [process.env.RABBITMQ_URL],
  //       queue: 'tokens-service',
  //     },
  //   },
  //   {
  //     inheritAppConfig: true,
  //   },
  // );

  await app.startAllMicroservices();

  await app.listen(process.env.port ?? 3000);
}

bootstrap();
