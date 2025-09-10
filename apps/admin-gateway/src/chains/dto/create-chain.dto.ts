import {
  IsHexadecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsEnum,
} from 'class-validator';
import { ChainNamespace } from '@app/common';
import { Expose } from 'class-transformer';

export class CreateChainDTO {
  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'name' })
  name: string;

  @IsNotEmpty()
  @IsHexadecimal()
  @Expose()
  chainID: string;

  @IsNotEmpty()
  @IsEnum(ChainNamespace)
  @Expose()
  chainNamespace: ChainNamespace;

  @IsNotEmpty()
  @IsUrl()
  @Expose()
  rpcURL: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  displayName: string;

  @IsNotEmpty()
  @IsUrl()
  @Expose()
  blockExplorerURL: string;

  @IsOptional()
  @IsString()
  @Expose()
  ticker?: string;

  @IsOptional()
  @IsString()
  @Expose()
  tickerName?: string;
}
