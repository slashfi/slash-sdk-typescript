// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalEntityAPI from './legal-entity';
import * as PayAPI from './pay';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SlashHandle extends APIResource {
  /**
   * List all of your Slash Handles
   */
  list(
    query: SlashHandleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SlashHandleListResponse> {
    return this._client.get('/slash-handle', { query, ...options });
  }
}

export interface SlashHandleListResponse {
  items: Array<PayAPI.SlashHandle>;

  /**
   * Response sent when requesting a list of data
   */
  metadata: LegalEntityAPI.PaginationResponse;
}

export interface SlashHandleListParams {
  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;
}

export declare namespace SlashHandle {
  export {
    type SlashHandleListResponse as SlashHandleListResponse,
    type SlashHandleListParams as SlashHandleListParams,
  };
}
