import { Inject, Injectable } from '@nestjs/common';
import { CHAINS_SERVICE } from '../constants';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { ChainDTO } from '@app/contracts';

@Injectable()
export class ChainsService {
  constructor(
    @Inject(CHAINS_SERVICE) private readonly chainsService: ClientProxy,
  ) {}

  async create() {
    const chain = await lastValueFrom<ChainDTO>(
      this.chainsService.send('chains.create', {
        name: 'Ethereum',
        chainID: '0x01',
        chainNamespace: 'EIP155',
        rpcURL: 'https://rpc.ethereum.com/rpc',
      }),
    );

    console.log({ chain });

    return chain;
  }
}
