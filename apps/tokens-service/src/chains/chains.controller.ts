import { Controller, Post, Body } from '@nestjs/common';
import { ChainsService } from './chains.service';
import { CreateChainDTO } from './dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('chains')
export class ChainsController {
  constructor(private readonly chainsService: ChainsService) {}

  @MessagePattern('chains.create')
  async create(@Payload() payload: CreateChainDTO) {
    return this.chainsService.create(payload);
  }
}
