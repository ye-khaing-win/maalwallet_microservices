import { Injectable } from '@nestjs/common';
import { CreateChainDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChainsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(payload: CreateChainDTO) {
    return this.prisma.chain.create({
      data: payload,
    });
  }
}
