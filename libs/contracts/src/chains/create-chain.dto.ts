import {
  IsHexadecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ChainNamespace } from '@app/common';

export class CreateChainDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsHexadecimal()
  chainID: string;

  @IsNotEmpty()
  @IsString()
  chainNamespace: ChainNamespace;

  @IsNotEmpty()
  @IsUrl()
  rpcURL: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsNotEmpty()
  @IsUrl()
  blockExplorerURL: string;

  @IsOptional()
  @IsString()
  ticker?: string;

  @IsOptional()
  @IsString()
  tickerName?: string;
}
