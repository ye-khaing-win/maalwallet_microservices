import { Module } from '@nestjs/common';
import { ChainsModule } from './chains/chains.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, ChainsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
