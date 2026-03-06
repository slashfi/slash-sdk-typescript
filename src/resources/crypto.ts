// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Crypto extends APIResource {
  /**
   * Retrieve a list of crypto offramp options
   */
  createOfframp(
    body: CryptoCreateOfframpParams,
    options?: RequestOptions,
  ): APIPromise<CryptoCreateOfframpResponse> {
    return this._client.post('/crypto/offramp', { body, ...options });
  }
}

export interface CryptoCreateOfframpResponse {
  addresses: Array<CryptoCreateOfframpResponse.Address>;

  wallet: CryptoCreateOfframpResponse.Wallet;
}

export namespace CryptoCreateOfframpResponse {
  export interface Address {
    id: string;

    address: string;

    chain:
      | 'ethereum'
      | 'avalanche'
      | 'base'
      | 'optimism'
      | 'polygon'
      | 'arbitrum'
      | 'solana'
      | 'stellar'
      | 'tron';

    currency: 'usdc' | 'usdt';

    status: 'pending_active' | 'active' | 'deactivated';

    timestamp: string;

    walletId: string;

    blockchainMemo?: string;

    method?: 'wire' | 'ach';
  }

  export interface Wallet {
    id: string;

    slashAccountGroupId: string;

    status: 'pending_active' | 'active' | 'deactivated';

    subaccountId: string;

    timestamp: string;

    type: 'off_ramp';
  }
}

export interface CryptoCreateOfframpParams {
  currency: 'usdt' | 'usdc';

  paymentRail: 'ach' | 'wire';

  /**
   * The id of the virtual account to offramp funds to.
   */
  virtualAccountId: string;
}

export declare namespace Crypto {
  export {
    type CryptoCreateOfframpResponse as CryptoCreateOfframpResponse,
    type CryptoCreateOfframpParams as CryptoCreateOfframpParams,
  };
}
