import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { TOKENS_SERVICE } from '../constants';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import {
  CHAINS_SERVICE_NAME,
  ChainsServiceClient,
} from '@app/contracts/proto/tokens';
import { ChainDto, CreateChainDto } from './dto';

@Injectable()
export class ChainsService implements OnModuleInit {
  private chainsService: ChainsServiceClient;
  constructor(@Inject(TOKENS_SERVICE) private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.chainsService =
      this.client.getService<ChainsServiceClient>(CHAINS_SERVICE_NAME);
  }

  async list(): Promise<ChainDto[]> {
    const res = await lastValueFrom(this.chainsService.list({}));

    return res.chains;
  }
  async create(data: CreateChainDto) {
    return lastValueFrom(this.chainsService.create(data));
  }
}
