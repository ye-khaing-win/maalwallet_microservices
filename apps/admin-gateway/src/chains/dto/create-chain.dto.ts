import {
  IsHexadecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ChainNamespace } from '@app/common';

export class CreateChainDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsHexadecimal()
  chainId: string;

  @IsNotEmpty()
  @IsString()
  chainNamespace: string;

  @IsNotEmpty()
  @IsUrl()
  rpcUrl: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsNotEmpty()
  @IsUrl()
  explorerUrl: string;

  @IsOptional()
  @IsString()
  ticker?: string;

  @IsOptional()
  @IsString()
  tickerName?: string;
}
