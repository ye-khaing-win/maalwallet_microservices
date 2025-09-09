import { Controller, Post, Body } from '@nestjs/common';
import { ChainsService } from './chains.service';
import { CreateChainDTO } from './dto';

@Controller('chains')
export class ChainsController {
  constructor(private readonly chainsService: ChainsService) {}

  @Post()
  async create(@Body() payload: CreateChainDTO) {
    return this.chainsService.create(payload);
  }
}
