import { Injectable } from '@nestjs/common';
import { CreateChainDTO, ChainDTO } from '@app/contracts/chains';
import { PrismaService } from '../prisma/prisma.service';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ChainsService {
  constructor(private readonly prisma: PrismaService) {
  }

  async create(payload: CreateChainDTO): Promise<ChainDTO> {
    return this.prisma.chain.create({
      data: payload,
    });
  }

  async list(): Promise<ChainDTO[]> {
    return this.prisma.chain.findMany();
  }

  async findByID(id: string): Promise<ChainDTO> {
    const chain = await this.prisma.chain.findUnique({
      where: { id },
    });

    if (!chain) {
      throw new RpcException({
        code: 404,
        message: 'Chain not found.',
      });
    }
    return chain;
  }
}
