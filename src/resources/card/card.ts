// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LegalEntityAPI from '../legal-entity';
import * as VirtualAccountAPI from '../virtual-account';
import * as SpendingConstraintAPI from './spending-constraint';
import {
  PartialSpendingConstraint,
  Restriction,
  SpendingConstraint,
  SpendingConstraintResource,
  SpendingConstraintUpdateFullParams,
  SpendingConstraintUpdatePartialParams,
} from './spending-constraint';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CardResource extends APIResource {
  spendingConstraint: SpendingConstraintAPI.SpendingConstraintResource =
    new SpendingConstraintAPI.SpendingConstraintResource(this._client);

  /**
   * Create a card
   */
  create(body: CardCreateParams, options?: RequestOptions): APIPromise<Card> {
    return this._client.post('/card', { body, ...options });
  }

  /**
   * Fetch details for a single card by card ID
   */
  retrieve(
    cardID: string,
    query: CardRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Card> {
    return this._client.get(path`/card/${cardID}`, { query, ...options });
  }

  /**
   * Update a card
   */
  update(cardID: string, body: CardUpdateParams, options?: RequestOptions): APIPromise<Card> {
    return this._client.patch(path`/card/${cardID}`, { body, ...options });
  }

  /**
   * List all cards you have access to.
   */
  list(
    query: CardListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CardListResponse> {
    return this._client.get('/card', { query, ...options });
  }

  /**
   * Get a card's current utilization
   */
  getUtilization(cardID: string, options?: RequestOptions): APIPromise<CardGroupUtilization> {
    return this._client.get(path`/card/${cardID}/utilization`, options);
  }
}

export interface Card {
  id: string;

  /**
   * The account that this card is associated with
   */
  accountId: string;

  /**
   * The month the card expires formatted as MM (01, 02, ..., 12)
   */
  expiryMonth: string;

  /**
   * The year the card expires formatted as YYYY (2024, 2025, ...)
   */
  expiryYear: string;

  /**
   * When true, a physical card has been issued. Otherwise, this is a virtual card.
   */
  isPhysical: boolean;

  /**
   * The last 4 digits of the card number
   */
  last4: string;

  /**
   * The name assigned to the card that appears on the user dashboard
   */
  name: string;

  /**
   * The status of the card
   */
  status: CardStatus;

  /**
   * The card group the card belongs to.
   */
  cardGroupId?: string;

  /**
   * The name of the card group the card belongs to.
   */
  cardGroupName?: string;

  /**
   * The ID of the card product this card was created with.
   */
  cardProductId?: string;

  createdAt?: string;

  /**
   * This field will contain full CVV which will only be sent on a request for a
   * single card when you set the query param "include_pan" to "true"
   */
  cvv?: string;

  /**
   * When true, the card will be automatically closed after a single authorization
   * attempt. Note that the card will be closed even if the authorization declines or
   * drops
   */
  isSingleUse?: boolean;

  /**
   * This field contains the full PAN which will only be sent on a request for a
   * single card when you set the query param "include_pan" to "true"
   */
  pan?: string;

  /**
   * The spending constraint applied to the card
   */
  spendingConstraint?: SpendingConstraintAPI.SpendingConstraint;

  /**
   * Arbitrary information that can be attached to the card. See the
   * [`PATCH /card/{cardId}`](api-reference/card-patch) endpoint for more details on
   * how to add user data.
   */
  userData?: unknown;

  /**
   * The virtual account that this card is associated with
   */
  virtualAccountId?: string;
}

export interface CardGroupUtilization {
  /**
   * The amount of money spent in the current period
   */
  spend: VirtualAccountAPI.Money;

  /**
   * The amount of money available in the current period. Only returned if the card
   * or card group has a spend limit.
   */
  availableBalance?: VirtualAccountAPI.Money;

  /**
   * The date the next reset will occur, undefined if collective
   */
  nextResetDate?: string;
}

export type CardStatus = 'active' | 'paused' | 'inactive' | 'closed';

export interface CardListResponse {
  items: Array<Card>;

  /**
   * Response sent when requesting a list of data
   */
  metadata?: LegalEntityAPI.PaginationResponse;
}

export interface CardCreateParams {
  name: string;

  /**
   * Specify the type of card you'd like to create. At the moment, only virtual cards
   * are supported.
   */
  type: 'virtual';

  /**
   * The ID of the account to create the card under. You can get this by calling
   * `GET /account`. This field is required unless you are authenticating via API
   * key, in which case it will default to your first commercial account. We
   * recommend supplying this even if you are authenticating via API key.
   */
  accountId?: string;

  cardGroupId?: string;

  /**
   * The ID of the card product to use when creating this card, if not specified a
   * random card product will be chosen.
   */
  cardProductId?: string;

  /**
   * Defaults to false. When set to true, the card will be automatically closed after
   * a single authorization attempt. Note that the card will be closed even if the
   * authorization declines or drops
   */
  isSingleUse?: boolean;

  /**
   * A constraint that can be applied to a CardGroupSpendingRule
   */
  spendingConstraint?: SpendingConstraintAPI.SpendingConstraint;

  /**
   * Arbitrary information that can be attached to the card. This should be a JSON
   * object and cannot exceed 4kb.
   */
  userData?: { [key: string]: unknown };

  /**
   * The ID of the virtual account to create the card under. Virtual accounts can be
   * retrieved by calling `GET /virtual-account`.
   */
  virtualAccountId?: string;
}

export interface CardRetrieveParams {
  include_cvv?: 'true' | 'false';

  include_pan?: 'true' | 'false';
}

export interface CardUpdateParams {
  /**
   * Explicitly set this value to null to remove the card from a group. Omitting this
   * field entirely will not affect the group the card belongs to.
   */
  cardGroupId?: string | null;

  name?: string;

  /**
   * Explicitly set this value to null to remove all card level spending constraints.
   */
  spendingConstraint?: SpendingConstraintAPI.SpendingConstraint | null;

  status?: CardStatus;

  /**
   * Arbitrary information that can be attached to the card. This should be a JSON
   * object and cannot exceed 4kb.
   */
  userData?: { [key: string]: unknown } | null;
}

export interface CardListParams {
  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;

  /**
   * Pass in an account ID to filter for cards under a specific account.
   */
  'filter:accountId'?: string;

  /**
   * Pass in a card group ID, This will return all cards that belong to the card
   * group ID passed in. Cannot be combined with filter:cardGroupName.
   */
  'filter:cardGroupId'?: string;

  /**
   * Pass in a card group name, This will return all cards that belong to the card
   * group name passed in. Cannot be combined with filter:cardGroupId.
   */
  'filter:cardGroupName'?: string;

  /**
   * Pass in a legal entity ID to filter for cards in accounts under a specific legal
   * entity.
   */
  'filter:legalEntityId'?: string;

  /**
   * Returns all cards matching the status passed in.
   */
  'filter:status'?: 'active' | 'paused' | 'closed' | 'inactive';

  /**
   * Pass in a virtual account ID to filter for cards under a specific virtual
   * account.
   */
  'filter:virtualAccountId'?: string;

  /**
   * Sorts card by creation date or name.
   */
  sort?: 'createdAt' | 'name';

  /**
   * The direction to apply the sort filter by. Default ASC.
   */
  sortDirection?: 'ASC' | 'DESC';
}

CardResource.SpendingConstraintResource = SpendingConstraintResource;

export declare namespace CardResource {
  export {
    type Card as Card,
    type CardGroupUtilization as CardGroupUtilization,
    type CardStatus as CardStatus,
    type CardListResponse as CardListResponse,
    type CardCreateParams as CardCreateParams,
    type CardRetrieveParams as CardRetrieveParams,
    type CardUpdateParams as CardUpdateParams,
    type CardListParams as CardListParams,
  };

  export {
    SpendingConstraintResource as SpendingConstraintResource,
    type PartialSpendingConstraint as PartialSpendingConstraint,
    type Restriction as Restriction,
    type SpendingConstraint as SpendingConstraint,
    type SpendingConstraintUpdateFullParams as SpendingConstraintUpdateFullParams,
    type SpendingConstraintUpdatePartialParams as SpendingConstraintUpdatePartialParams,
  };
}
