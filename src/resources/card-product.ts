// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalEntityAPI from './legal-entity';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CardProduct extends APIResource {
  /**
   * Get all card products
   */
  list(
    query: CardProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardProductListResponse> {
    return this._client.get('/card-product', { query, ...options });
  }
}

export interface CardProductListResponse {
  items: Array<CardProductListResponse.Item>;

  /**
   * Response sent when requesting a list of data
   */
  metadata?: LegalEntityAPI.PaginationResponse;
}

export namespace CardProductListResponse {
  export interface Item {
    id: string;

    prefix: string;

    status: 'active' | 'inactive';
  }
}

export interface CardProductListParams {
  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;
}

export declare namespace CardProduct {
  export {
    type CardProductListResponse as CardProductListResponse,
    type CardProductListParams as CardProductListParams,
  };
}
