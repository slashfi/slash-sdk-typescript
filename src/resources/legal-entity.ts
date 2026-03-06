// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class LegalEntity extends APIResource {
  /**
   * List all legal entities you have access to
   */
  list(options?: RequestOptions): APIPromise<LegalEntityListResponse> {
    return this._client.get('/legal-entity', options);
  }
}

/**
 * Response sent when requesting a list of data
 */
export interface PaginationResponse {
  /**
   * The number of items in the current page of data.
   */
  count?: number;

  /**
   * The cursor to use to retrieve the next page of data. If this is not sent, there
   * is no more data to retrieve.
   */
  nextCursor?: string;
}

export interface LegalEntityListResponse {
  items: Array<LegalEntityListResponse.Item>;

  /**
   * Response sent when requesting a list of data
   */
  metadata: PaginationResponse;
}

export namespace LegalEntityListResponse {
  /**
   * A legal entity is an entity (either a person or a business) that can own
   * accounts. If you are using the API with an API key, your API key will only be
   * associated with one legal entity, so you will not need to specify the legal
   * entity ID in most endpoints. If you are using the API with an OAuth2 access
   * token, you can filter the results of most endpoints to only show data for a
   * specific legal entity by specifying the legal entity ID in the URL.
   */
  export interface Item {
    id: string;

    name: string;

    /**
     * Will be empty in rare cases where the legal entity has not yet been fully
     * created.
     */
    structure?: 'person' | 'llc' | 'lp' | 'llp' | 'gp' | 'partnership' | 'ccorp' | 'scorp';
  }
}

export declare namespace LegalEntity {
  export {
    type PaginationResponse as PaginationResponse,
    type LegalEntityListResponse as LegalEntityListResponse,
  };
}
