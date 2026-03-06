// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalEntityAPI from './legal-entity';
import * as VirtualAccountAPI from './virtual-account';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountResource extends APIResource {
  /**
   * Get a single account by Id
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<Account> {
    return this._client.get(path`/account/${accountID}`, options);
  }

  /**
   * List all accounts you have access to
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/account', { query, ...options });
  }

  /**
   * Retrieve a list of balances for an account. The balances are returned in an
   * array, with each item representing a balance for that account.
   *
   * For charge_card accounts, there will be two balances returned: "cash" and
   * "credit". For debit accounts, there will only be one balance returned: "debit".
   */
  retrieveBalance(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveBalanceResponse> {
    return this._client.get(path`/account/${accountID}/balance`, options);
  }
}

export interface Account {
  id: string;

  accountNumber: string;

  balances: Array<'debit' | 'cash' | 'credit'>;

  createdAt: string;

  name: string;

  routingNumber: string;

  status: 'open' | 'closed';

  /**
   * The type of account. - "debit" represents a debit card account - "charge_card"
   * represents a charge card account
   */
  type: 'debit' | 'charge_card';
}

export interface AccountListResponse {
  items: Array<Account>;

  /**
   * Response sent when requesting a list of data
   */
  metadata: LegalEntityAPI.PaginationResponse;
}

export interface AccountRetrieveBalanceResponse {
  balances: Array<AccountRetrieveBalanceResponse.Balance>;
}

export namespace AccountRetrieveBalanceResponse {
  export interface Balance {
    /**
     * The ID of the account associated with the balance.
     */
    accountId: string;

    /**
     * Represents a monetary value
     */
    available: VirtualAccountAPI.Money;

    /**
     * Represents a monetary value
     */
    posted: VirtualAccountAPI.Money;

    /**
     * The UTC timestamp associated with the balance. Since the balance can change
     * rapidly, the timestamp is included to indicate the time when the balance was
     * computed.
     */
    timestamp: string;

    /**
     * The type of balance.
     *
     * - "cash" represents the excess balance not used as collateral for the charge
     *   card. Not applicable to debit accounts.
     * - "credit" represents the balance that can be spent on the charge card. Not
     *   applicable to debit accounts.
     * - "debit" represents the balance that can be spent or withdrawn. Not applicable
     *   to charge card accounts.
     */
    type: 'cash' | 'credit' | 'debit';
  }
}

export interface AccountListParams {
  /**
   * Pass in a legal entity ID to filter for accounts under a specific legal entity.
   */
  'filter:legalEntityId'?: string;
}

export declare namespace AccountResource {
  export {
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountRetrieveBalanceResponse as AccountRetrieveBalanceResponse,
    type AccountListParams as AccountListParams,
  };
}
