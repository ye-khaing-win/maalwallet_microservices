import { Controller } from '@nestjs/common';
import { ChainsService } from './chains.service';
import { CHAINS_PATTERNS, CreateChainDTO } from '@app/contracts/chains';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ChainsController {
  constructor(private readonly chainsService: ChainsService) {
  }

  @MessagePattern(CHAINS_PATTERNS.CREATE)
  async create(@Payload() payload: CreateChainDTO) {
    return this.chainsService.create(payload);
  }

  @MessagePattern(CHAINS_PATTERNS.LIST)
  async list() {
    return this.chainsService.list();
  }

  @MessagePattern(CHAINS_PATTERNS.DETAILS)
  async findByID(@Payload() id: string) {
    return this.chainsService.findByID(id);
  }
}
