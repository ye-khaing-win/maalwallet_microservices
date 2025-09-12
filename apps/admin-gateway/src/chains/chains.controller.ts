import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChainsService } from './chains.service';
import { ChainDto, CreateChainDto } from './dto';
import { Serialize } from '@app/common';

@Controller('chains')
export class ChainsController {
  constructor(private readonly chainsService: ChainsService) {}

  @Post()
  create(@Body() data: CreateChainDto) {
    console.log(data);
    return this.chainsService.create(data);
  }

  @Serialize(ChainDto)
  @Get()
  async list() {
    return await this.chainsService.list();
  }
}
