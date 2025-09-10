import { Module } from '@nestjs/common';
import { ChainsService } from './chains.service';
import { ChainsController } from './chains.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CHAINS_SERVICE } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: CHAINS_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URL],
          queue: 'tokens-service',
        },
      },
    ]),
  ],
  controllers: [ChainsController],
  providers: [ChainsService],
})
export class ChainsModule {}
