import { Controller, Get, Post } from '@nestjs/common';
import { ChainsService } from './chains.service';

@Controller('chains')
export class ChainsController {
  constructor(private readonly chainsService: ChainsService) {}

  @Get()
  create() {
    return this.chainsService.create();
  }
}
