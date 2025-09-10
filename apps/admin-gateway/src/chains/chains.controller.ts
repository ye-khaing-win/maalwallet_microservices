import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { ChainsService } from './chains.service';
import { ChainDTO, CreateChainDTO } from './dto';
import { Serialize } from '@app/common';

@Controller('chains')
export class ChainsController {
  constructor(private readonly chainsService: ChainsService) {}

  @Post()
  create(@Body() data: CreateChainDTO) {
    console.log(data);
    return this.chainsService.create(data);
  }

  @Serialize(ChainDTO)
  @Get()
  async list() {
    const list = await this.chainsService.list();
    return list[0];
  }
}
