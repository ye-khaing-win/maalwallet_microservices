import { Expose } from 'class-transformer';

export class ChainDTO {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  chainID: string;

  @Expose()
  chainNamespace: string;

  @Expose()
  rpcURL: string;

  @Expose()
  displayName: string;

  @Expose()
  blockExplorerURL: string;

  @Expose()
  ticker?: string;

  @Expose()
  tickerName?: string;
}
