// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalEntityAPI from './legal-entity';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class MerchantCategory extends APIResource {
  /**
   * Retrieve the list of available merchant category ids
   */
  list(
    query: MerchantCategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MerchantCategoryListResponse> {
    return this._client.get('/merchant-category', { query, ...options });
  }
}

export interface MerchantCategoryListResponse {
  items: Array<MerchantCategoryListResponse.Item>;

  /**
   * Response sent when requesting a list of data
   */
  metadata?: LegalEntityAPI.PaginationResponse;
}

export namespace MerchantCategoryListResponse {
  export interface Item {
    id: string;

    name: string;
  }
}

export interface MerchantCategoryListParams {
  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;
}

export declare namespace MerchantCategory {
  export {
    type MerchantCategoryListResponse as MerchantCategoryListResponse,
    type MerchantCategoryListParams as MerchantCategoryListParams,
  };
}
