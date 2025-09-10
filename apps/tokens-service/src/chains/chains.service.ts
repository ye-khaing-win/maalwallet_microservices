import { Injectable } from '@nestjs/common';
import { CreateChainDTO, ChainDTO } from '@app/contracts/chains';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChainsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: CreateChainDTO): Promise<ChainDTO> {
    return this.prisma.chain.create({
      data: payload,
    });
  }

  async list(): Promise<ChainDTO[]> {
    return this.prisma.chain.findMany();
  }
}
