// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as VirtualAccountAPI from './virtual-account';
import * as LegalEntityAPI from './legal-entity';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class VirtualAccountResource extends APIResource {
  /**
   * Create a virtual account
   */
  create(
    body: VirtualAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<VirtualAccountCreateResponse> {
    return this._client.post('/virtual-account', { body, ...options });
  }

  /**
   * Retrieve a single virtual account by its ID.
   */
  retrieve(virtualAccountID: string, options?: RequestOptions): APIPromise<VirtualAccount> {
    return this._client.get(path`/virtual-account/${virtualAccountID}`, options);
  }

  /**
   * Update an existing virtual account
   */
  update(
    virtualAccountID: string,
    body: VirtualAccountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VirtualAccountUpdateResponse> {
    return this._client.patch(path`/virtual-account/${virtualAccountID}`, { body, ...options });
  }

  /**
   * Retrieve a list of virtual accounts under an account. The virtual accounts are
   * returned in an array, with each item representing a virtual account under that
   * account.
   *
   * The primary account will also be returned as a virtual account, with an account
   * type of 'primary' while actual subaccounts under the primary account will have
   * an account type of 'default'.
   */
  list(
    query: VirtualAccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VirtualAccountListResponse> {
    return this._client.get('/virtual-account', { query, ...options });
  }
}

export type CommissionDetails = CommissionDetails.UnionMember0 | CommissionDetails.UnionMember1;

export namespace CommissionDetails {
  export interface UnionMember0 {
    /**
     * The amount of money to be diverted from the virtual account if the type of rule
     * is flat_fee.
     */
    amount: VirtualAccountAPI.Money;

    /**
     * The frequency from the start date that the rule will be applied. E.g. a start
     * date of November 26, 2024 with a frequency of "monthly" will have the rule
     * applied on December 26, 2024. If the frequency was "yearly", the rule would be
     * applied again on November 26, 2025.
     */
    frequency: 'monthly' | 'yearly';

    /**
     * The type of the commission rule. A type of flat_fee will take a flat fee from
     * the virtual account and transfer it to the primary account with the frequency of
     * the collection defined as monthly or yearly.
     */
    type: 'flatFee';

    /**
     * The date that the rule will begin to take effect.
     */
    startDate?: string;
  }

  export interface UnionMember1 {
    /**
     * The percentage of funds to divert from the virtual account to the primary
     * account.
     */
    takeRate: number;

    /**
     * The type of the commission rule. A type of take_rate will take a percent of the
     * virtual account's funds and divert them to the primary account.
     */
    type: 'takeRate';
  }
}

/**
 * The virtual account commission rule object
 */
export interface CommissionRule {
  /**
   * The ID of the commission rule
   */
  id: string;

  /**
   * Describes details of the commission rule.
   */
  commissionDetails: CommissionDetails;

  /**
   * The ID of the virtual account the commission rule is applied to
   */
  virtualAccountId: string;
}

/**
 * Represents a monetary value
 */
export interface Money {
  /**
   * The amount in cents
   */
  amountCents: number;
}

export interface VirtualAccount {
  /**
   * The total balance of the virtual account
   */
  balance: Money;

  /**
   * The total spend of the virtual account
   */
  spend: Money;

  /**
   * The virtual account itself
   */
  virtualAccount: VirtualAccountModel;

  /**
   * The commission rule applied to the virtual account, if any
   */
  commissionRule?: CommissionRule;
}

/**
 * The virtual account object
 */
export interface VirtualAccountModel {
  /**
   * The ID of the virtual account.
   */
  id: string;

  /**
   * The account ID of the Slash account the virtual account is associated with.
   */
  accountId: string;

  /**
   * The account type of the virtual account. Since virtual accounts and Slash
   * accounts exist at the same hierarchy level, an account type of 'primary' means
   * it is the main Slash account, while an account type of 'default' means it is a
   * virtual account under the main account.
   */
  accountType: 'default' | 'primary';

  /**
   * The name of the virtual account.
   */
  name: string;

  /**
   * The account number of the virtual account.
   */
  accountNumber?: string;

  /**
   * The date the virtual account was closed; will be null if account was never
   * closed.
   */
  closedAt?: string;

  /**
   * The routing number of the virtual account.
   */
  routingNumber?: string;
}

export interface VirtualAccountCreateResponse {
  /**
   * The virtual account object
   */
  virtualAccount: VirtualAccountModel;

  /**
   * The virtual account commission rule object
   */
  commissionRule?: CommissionRule;
}

export interface VirtualAccountUpdateResponse {
  /**
   * The virtual account object
   */
  virtualAccount: VirtualAccountModel;

  /**
   * The virtual account commission rule object
   */
  commissionRule?: CommissionRule;
}

export interface VirtualAccountListResponse {
  items: Array<VirtualAccount>;

  /**
   * Response sent when requesting a list of data
   */
  metadata?: LegalEntityAPI.PaginationResponse;
}

export interface VirtualAccountCreateParams {
  /**
   * The account ID the virtual account should be created under.
   */
  accountId: string;

  /**
   * The name of the virtual account
   */
  name: string;

  /**
   * Specifies how much of the virtual account's incoming funds should be diverted to
   * the primary account
   */
  commissionDetails?: CommissionDetails;
}

export type VirtualAccountUpdateParams =
  | VirtualAccountUpdateParams.Variant0
  | VirtualAccountUpdateParams.Variant1;

export declare namespace VirtualAccountUpdateParams {
  export interface Variant0 {
    /**
     * The type of action to take. An action of type "update" will update the virtual
     * account with the specified properties.
     */
    action: 'update';

    commissionDetails?: CommissionDetails;

    /**
     * The name to update the virtual account with.
     */
    name?: string;
  }

  export interface Variant1 {
    /**
     * The type of action to take. An action of type "close" will close the virtual
     * account.
     */
    action: 'close';
  }
}

export interface VirtualAccountListParams {
  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;

  /**
   * Pass in an account ID to filter virtual accounts by account ID. This will return
   * all virtual accounts that match the account ID passed in.
   */
  'filter:accountId'?: string;

  /**
   * Include virtual accounts that have been closed in the query results. By default,
   * they will not be returned.
   */
  'filter:includeClosedAccounts'?: string;
}

export declare namespace VirtualAccountResource {
  export {
    type CommissionDetails as CommissionDetails,
    type CommissionRule as CommissionRule,
    type Money as Money,
    type VirtualAccount as VirtualAccount,
    type VirtualAccountModel as VirtualAccountModel,
    type VirtualAccountCreateResponse as VirtualAccountCreateResponse,
    type VirtualAccountUpdateResponse as VirtualAccountUpdateResponse,
    type VirtualAccountListResponse as VirtualAccountListResponse,
    type VirtualAccountCreateParams as VirtualAccountCreateParams,
    type VirtualAccountUpdateParams as VirtualAccountUpdateParams,
    type VirtualAccountListParams as VirtualAccountListParams,
  };
}
