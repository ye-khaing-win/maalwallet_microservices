import { IsHexadecimal, IsNotEmpty, IsString, IsUrl } from 'class-validator';

enum ChainNamespace {
  EIP155 = 'EIP155',
  // SOLANA = 'SOLANA',
}

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

  @IsNotEmpty()
  @IsString()
  ticker: string;

  @IsNotEmpty()
  @IsString()
  tickerName: string;
}
