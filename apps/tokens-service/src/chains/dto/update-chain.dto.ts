import { PartialType } from '@nestjs/mapped-types';
import { CreateChainDTO } from './create-chain.dto';

export class UpdateChainDto extends PartialType(CreateChainDTO) {}
