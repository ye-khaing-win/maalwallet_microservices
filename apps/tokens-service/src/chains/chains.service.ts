import { Injectable } from '@nestjs/common';
import { CreateChainDto, ChainDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChainsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateChainDto): Promise<ChainDto> {
    return this.prisma.chain.create({
      data,
    });
  }

  async list(): Promise<ChainDto[]> {
    return this.prisma.chain.findMany();
  }

  async get(id: string): Promise<ChainDto> {
    return this.prisma.chain.findUnique({
      where: {
        id,
      },
    });
  }
}
