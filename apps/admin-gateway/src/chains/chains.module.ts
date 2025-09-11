import { Module } from '@nestjs/common';
import { ChainsService } from './chains.service';
import { ChainsController } from './chains.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TOKENS_PACKAGE_NAME } from '@app/contracts/proto/tokens';
import { join } from 'path';
import { TOKENS_SERVICE } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: TOKENS_SERVICE,
        transport: Transport.GRPC,
        options: {
          package: TOKENS_PACKAGE_NAME,
          protoPath: join(process.cwd(), 'proto/tokens.proto'),
          url: 'tokens-service:50052',
        },
      },
    ]),
    // ClientsModule.register([
    //   {
    //     name: CHAINS_SERVICE,
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [process.env.RABBITMQ_URL],
    //       queue: 'tokens-service',
    //     },
    //   },
    // ]),
  ],
  controllers: [ChainsController],
  providers: [ChainsService],
})
export class ChainsModule {}
