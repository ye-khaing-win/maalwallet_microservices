import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { ChainsService } from './chains.service';
// import { CHAINS_PATTERNS, CreateChainDto } from '@app/contracts/chains';
// import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  ChainResponse,
  ChainsServiceController,
  ChainsServiceControllerMethods,
  CreateChainRequest,
  GetChainRequest,
  ListChainResponse,
} from '@app/contracts/proto/tokens';

@Controller()
@ChainsServiceControllerMethods()
export class ChainsController implements ChainsServiceController {
  constructor(private readonly chainsService: ChainsService) {}

  async list(): Promise<ListChainResponse> {
    const chains = await this.chainsService.list();

    return {
      chains,
    };
  }

  async get(request: GetChainRequest): Promise<ChainResponse> {
    const id = request.id;
    return this.chainsService.get(id);
  }

  async create(request: CreateChainRequest): Promise<ChainResponse> {
    console.log(request, 'req in controller');
    return this.chainsService.create(request);
  }

  // @MessagePattern(CHAINS_PATTERNS.CREATE)
  async createa() {}
  //
  // @MessagePattern(CHAINS_PATTERNS.LIST)
  // async list() {
  //   return this.chainsService.list();
  // }
}
