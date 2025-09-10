import {
  IsHexadecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
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
  @Expose({ name: 'chain_id' })
  chainID: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'chain_namespace' })
  chainNamespace: ChainNamespace;

  @IsNotEmpty()
  @IsUrl()
  @Expose({ name: 'rpc_url' })
  rpcURL: string;

  @IsNotEmpty()
  @IsString()
  @Expose({ name: 'display_name' })
  displayName: string;

  @IsNotEmpty()
  @IsUrl()
  @Expose({ name: 'block_explorer_url' })
  blockExplorerURL: string;

  @IsOptional()
  @IsString()
  @Expose({ name: 'ticker' })
  ticker?: string;

  @IsOptional()
  @IsString()
  @Expose({ name: 'ticker_name' })
  tickerName?: string;
}
