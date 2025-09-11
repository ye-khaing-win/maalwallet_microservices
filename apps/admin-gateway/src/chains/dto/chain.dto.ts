import { Expose } from 'class-transformer';

export class ChainDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  chainId: string;

  @Expose()
  chainNamespace: string;

  @Expose()
  rpcUrl: string;

  @Expose()
  displayName?: string;

  @Expose()
  explorerUrl?: string;

  @Expose()
  ticker?: string;

  @Expose()
  tickerName?: string;
}
