import { Expose } from 'class-transformer';

export class ChainDTO {
  @Expose({ name: 'id' })
  id: string;

  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'chain_id' })
  chainID: string;

  @Expose({ name: 'chain_namespace' })
  chainNamespace: string;

  @Expose({ name: 'rpcURL' })
  rpcURL: string;

  @Expose({ name: 'display_name' })
  displayName: string;

  @Expose({ name: 'block_explorer_url' })
  blockExplorerURL: string;

  @Expose({ name: 'ticker' })
  ticker?: string;

  @Expose({ name: 'ticker_name' })
  tickerName?: string;
}
