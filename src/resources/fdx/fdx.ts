// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomersAPI from './customers';
import { CustomerRetrieveCurrentResponse, Customers } from './customers';
import * as AccountsAPI from './accounts/accounts';
import {
  AccountListParams,
  AccountListResponse,
  AccountListTransactionsParams,
  AccountListTransactionsResponse,
  AccountRetrieveContactResponse,
  AccountRetrievePaymentNetworksParams,
  AccountRetrievePaymentNetworksResponse,
  AccountRetrieveResponse,
  Accounts,
  DepositAccount,
  InvestmentAccount,
  LineOfCreditAccount,
  LoanAccount,
} from './accounts/accounts';

export class Fdx extends APIResource {
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
}

Fdx.Customers = Customers;
Fdx.Accounts = Accounts;

export declare namespace Fdx {
  export { Customers as Customers, type CustomerRetrieveCurrentResponse as CustomerRetrieveCurrentResponse };

  export {
    Accounts as Accounts,
    type DepositAccount as DepositAccount,
    type InvestmentAccount as InvestmentAccount,
    type LineOfCreditAccount as LineOfCreditAccount,
    type LoanAccount as LoanAccount,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountListTransactionsResponse as AccountListTransactionsResponse,
    type AccountRetrieveContactResponse as AccountRetrieveContactResponse,
    type AccountRetrievePaymentNetworksResponse as AccountRetrievePaymentNetworksResponse,
    type AccountListParams as AccountListParams,
    type AccountListTransactionsParams as AccountListTransactionsParams,
    type AccountRetrievePaymentNetworksParams as AccountRetrievePaymentNetworksParams,
  };
}
