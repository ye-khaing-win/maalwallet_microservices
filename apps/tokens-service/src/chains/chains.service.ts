import { Injectable } from '@nestjs/common';
import { CreateChainDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { ChainDTO } from '@app/contracts';

@Injectable()
export class ChainsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: CreateChainDTO): Promise<ChainDTO> {
    return this.prisma.chain.create({
      data: payload,
    });
  }
}
