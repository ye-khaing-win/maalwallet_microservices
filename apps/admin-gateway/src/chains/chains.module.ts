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
        transport: Transport.NATS,
        options: {
          servers: process.env.NATS_URL,
        },
      },
    ]),
  ],
  controllers: [ChainsController],
  providers: [ChainsService],
})
export class ChainsModule {}
