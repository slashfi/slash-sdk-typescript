// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LegalEntityAPI from '../legal-entity';
import * as SpendingConstraintAPI from './spending-constraint';
import {
  SpendingConstraint,
  SpendingConstraintUpdateFullParams,
  SpendingConstraintUpdatePartialParams,
} from './spending-constraint';
import * as CardAPI from '../card/card';
import * as CardSpendingConstraintAPI from '../card/spending-constraint';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CardGroupResource extends APIResource {
  spendingConstraint: SpendingConstraintAPI.SpendingConstraint = new SpendingConstraintAPI.SpendingConstraint(
    this._client,
  );

  /**
   * Create a card group.
   */
  create(body: CardGroupCreateParams, options?: RequestOptions): APIPromise<CardGroup> {
    return this._client.post('/card-group', { body, ...options });
  }

  /**
   * Fetch details for a single card group by card group ID
   */
  retrieve(cardGroupID: string, options?: RequestOptions): APIPromise<CardGroup> {
    return this._client.get(path`/card-group/${cardGroupID}`, options);
  }

  /**
   * Update a card group
   */
  update(cardGroupID: string, body: CardGroupUpdateParams, options?: RequestOptions): APIPromise<CardGroup> {
    return this._client.patch(path`/card-group/${cardGroupID}`, { body, ...options });
  }

  /**
   * Retrieve the list of card groups that the user owns.
   */
  list(
    query: CardGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardGroupListResponse> {
    return this._client.get('/card-group', { query, ...options });
  }

  /**
   * Get a card group's current utilization
   */
  getUtilization(cardGroupID: string, options?: RequestOptions): APIPromise<CardAPI.CardGroupUtilization> {
    return this._client.get(path`/card-group/${cardGroupID}/utilization`, options);
  }
}

export interface CardGroup {
  id: string;

  name: string;

  /**
   * A constraint that can be applied to a CardGroupSpendingRule
   */
  spendingConstraint?: CardSpendingConstraintAPI.SpendingConstraint;

  /**
   * The ID of the virtual account that the card group is associated with
   */
  virtualAccountId?: string;
}

export interface CardGroupListResponse {
  items: Array<CardGroup>;

  /**
   * Response sent when requesting a list of data
   */
  metadata?: LegalEntityAPI.PaginationResponse;
}

export interface CardGroupCreateParams {
  name: string;

  /**
   * A constraint that can be applied to a CardGroupSpendingRule
   */
  spendingConstraint?: CardSpendingConstraintAPI.SpendingConstraint;

  /**
   * The ID of the virtual account to associate with the card group. If not provided,
   * the primary virtual account will be used.
   */
  virtualAccountId?: string;
}

export interface CardGroupUpdateParams {
  name?: string;

  /**
   * Explicitly set this value to null to remove all card group level spending
   * constraints.
   */
  spendingConstraint?: CardSpendingConstraintAPI.SpendingConstraint | null;
}

export interface CardGroupListParams {
  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;

  /**
   * Pass in a name to filter for card groups with a matching name.
   */
  'filter:name'?: string;
}

CardGroupResource.SpendingConstraint = SpendingConstraint;

export declare namespace CardGroupResource {
  export {
    type CardGroup as CardGroup,
    type CardGroupListResponse as CardGroupListResponse,
    type CardGroupCreateParams as CardGroupCreateParams,
    type CardGroupUpdateParams as CardGroupUpdateParams,
    type CardGroupListParams as CardGroupListParams,
  };

  export {
    SpendingConstraint as SpendingConstraint,
    type SpendingConstraintUpdateFullParams as SpendingConstraintUpdateFullParams,
    type SpendingConstraintUpdatePartialParams as SpendingConstraintUpdatePartialParams,
  };
}
