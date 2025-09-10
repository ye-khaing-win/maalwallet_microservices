import { Inject, Injectable } from '@nestjs/common';
import { CHAINS_SERVICE } from '../constants';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {
  ChainDTO as ClientChainDTO,
  CreateChainDTO as ClientCreateChainDTO,
  CHAINS_PATTERNS,
} from '@app/contracts/chains';
import { CreateChainDTO } from './dto';

@Injectable()
export class ChainsService {
  constructor(
    @Inject(CHAINS_SERVICE) private readonly chainsService: ClientProxy,
  ) {}

  async list() {
    return lastValueFrom(
      this.chainsService.send<ClientChainDTO[]>(CHAINS_PATTERNS.LIST, {}),
    );
  }
  async create(data: CreateChainDTO) {
    return lastValueFrom(
      this.chainsService.send<ClientChainDTO, ClientCreateChainDTO>(
        CHAINS_PATTERNS.CREATE,
        data,
      ),
    );
  }
}
