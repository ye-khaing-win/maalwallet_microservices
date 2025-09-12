import {
  IsEnum,
  IsHexadecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ChainNamespace } from '@app/common';
import { Expose } from 'class-transformer';

export class CreateChainDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsHexadecimal()
  chainId: string;

  @IsNotEmpty()
  @IsEnum(ChainNamespace)
  chainNamespace: ChainNamespace;

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
