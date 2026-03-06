// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalEntityAPI from './legal-entity';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MerchantResource extends APIResource {
  /**
   * Fetch details for a single merchant by ID
   */
  retrieve(merchantID: string, options?: RequestOptions): APIPromise<Merchant> {
    return this._client.get(path`/merchant/${merchantID}`, options);
  }

  /**
   * Retrieve the list of available merchant ids
   */
  list(
    query: MerchantListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MerchantListResponse> {
    return this._client.get('/merchant', { query, ...options });
  }
}

export interface Merchant {
  id: string;

  name: string;

  url?: string;
}

export interface MerchantListResponse {
  items: Array<Merchant>;

  /**
   * Response sent when requesting a list of data
   */
  metadata?: LegalEntityAPI.PaginationResponse;
}

export interface MerchantListParams {
  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;

  /**
   * Pass in a merchant name to filter merchants by name.
   */
  'search:merchant_name'?: string;
}

export declare namespace MerchantResource {
  export {
    type Merchant as Merchant,
    type MerchantListResponse as MerchantListResponse,
    type MerchantListParams as MerchantListParams,
  };
}
