// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from './accounts';
import * as StatementsAPI from './statements';
import {
  StatementListParams,
  StatementListResponse,
  StatementRetrievePdfParams,
  Statements,
} from './statements';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Accounts extends APIResource {
  statements: StatementsAPI.Statements = new StatementsAPI.Statements(this._client);

  /**
   * Get account balances and liabilities
   */
  retrieve(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/fdx/accounts/${accountID}`, options);
  }

  /**
   * List all accounts
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListResponse> {
    return this._client.get('/fdx/accounts', { query, ...options });
  }

  /**
   * Search for transactions
   */
  listTransactions(
    accountID: string,
    query: AccountListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountListTransactionsResponse> {
    return this._client.get(path`/fdx/accounts/${accountID}/transactions`, { query, ...options });
  }

  /**
   * Get an account's contact information
   */
  retrieveContact(accountID: string, options?: RequestOptions): APIPromise<AccountRetrieveContactResponse> {
    return this._client.get(path`/fdx/accounts/${accountID}/contact`, options);
  }

  /**
   * Get payment networks supported by the account
   */
  retrievePaymentNetworks(
    accountID: string,
    query: AccountRetrievePaymentNetworksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrievePaymentNetworksResponse> {
    return this._client.get(path`/fdx/accounts/${accountID}/payment-networks`, { query, ...options });
  }
}

/**
 * A deposit account. For example, a checking, savings or money market account.
 */
export interface DepositAccount {
  /**
   * Long-term persistent identity of the account, though not an account number.
   */
  accountId: string;

  accountType: 'CHECKING' | 'SAVINGS' | 'CD' | 'ESCROW' | 'MONEYMARKET' | 'OTHERDEPOSIT';

  currency: DepositAccount.Currency;

  /**
   * Marketed product name for this account. You can use this in UIs to assist in
   * account selection. For example, "Slash Platinum".
   */
  productName: string;

  status:
    | 'CLOSED'
    | 'DELINQUENT'
    | 'NEGATIVECURRENTBALANCE'
    | 'OPEN'
    | 'PAID'
    | 'PENDINGCLOSE'
    | 'PENDINGOPEN'
    | 'RESTRICTED';

  /**
   * A masked version of the account number, which includes the last 4 digits in
   * plain text.
   */
  accountNumberDisplay?: string;

  /**
   * A nickname or label for the account. This will be unique to the account, even if
   * the user has multiple accounts with the same product name. You can use this in
   * UIs to assist in account selection.
   */
  nickname?: string;
}

export namespace DepositAccount {
  export interface Currency {
    /**
     * The ISO 4217 currency code for the currency that the account is denominated in.
     * For example, "USD" for US Dollars.
     */
    currencyCode: string;
  }
}

/**
 * An investment account. For example, a 401K or IRA.
 */
export interface InvestmentAccount {
  /**
   * Long-term persistent identity of the account, though not an account number.
   */
  accountId: string;

  accountType:
    | '401A'
    | '401K'
    | '403B'
    | '529'
    | 'BROKERAGEPRODUCT'
    | 'COVERDELL'
    | 'DIGITALASSET'
    | 'DEFINEDBENEFIT'
    | 'ESOP'
    | 'GUARDIAN'
    | 'INSTITUTIONALTRUST'
    | 'IRA'
    | 'KEOGH'
    | 'NONQUALIFIEDPLAN'
    | 'OTHERINVESTMENT'
    | 'ROLLOVER'
    | 'ROTH'
    | 'SARSEP'
    | 'TAXABLE'
    | 'TDA'
    | 'TRUST'
    | 'TERM'
    | 'UGMA'
    | 'UTMA';

  currency: InvestmentAccount.Currency;

  /**
   * Marketed product name for this account. You can use this in UIs to assist in
   * account selection. For example, "Slash Platinum".
   */
  productName: string;

  status:
    | 'CLOSED'
    | 'DELINQUENT'
    | 'NEGATIVECURRENTBALANCE'
    | 'OPEN'
    | 'PAID'
    | 'PENDINGCLOSE'
    | 'PENDINGOPEN'
    | 'RESTRICTED';

  /**
   * A masked version of the account number, which includes the last 4 digits in
   * plain text.
   */
  accountNumberDisplay?: string;

  /**
   * A nickname or label for the account. This will be unique to the account, even if
   * the user has multiple accounts with the same product name. You can use this in
   * UIs to assist in account selection.
   */
  nickname?: string;
}

export namespace InvestmentAccount {
  export interface Currency {
    /**
     * The ISO 4217 currency code for the currency that the account is denominated in.
     * For example, "USD" for US Dollars.
     */
    currencyCode: string;
  }
}

/**
 * A line-of-credit account. For example, a credit card or home equity line of
 * credit.
 */
export interface LineOfCreditAccount {
  /**
   * Long-term persistent identity of the account, though not an account number.
   */
  accountId: string;

  accountType: 'LINEOFCREDIT' | 'CHARGE' | 'CREDITCARD' | 'HOMELINEOFCREDIT';

  currency: LineOfCreditAccount.Currency;

  /**
   * Marketed product name for this account. You can use this in UIs to assist in
   * account selection. For example, "Slash Platinum".
   */
  productName: string;

  status:
    | 'CLOSED'
    | 'DELINQUENT'
    | 'NEGATIVECURRENTBALANCE'
    | 'OPEN'
    | 'PAID'
    | 'PENDINGCLOSE'
    | 'PENDINGOPEN'
    | 'RESTRICTED';

  /**
   * A masked version of the account number, which includes the last 4 digits in
   * plain text.
   */
  accountNumberDisplay?: string;

  /**
   * A nickname or label for the account. This will be unique to the account, even if
   * the user has multiple accounts with the same product name. You can use this in
   * UIs to assist in account selection.
   */
  nickname?: string;
}

export namespace LineOfCreditAccount {
  export interface Currency {
    /**
     * The ISO 4217 currency code for the currency that the account is denominated in.
     * For example, "USD" for US Dollars.
     */
    currencyCode: string;
  }
}

/**
 * A loan account. For example, mortgage, student loan or auto loan.
 */
export interface LoanAccount {
  /**
   * Long-term persistent identity of the account, though not an account number.
   */
  accountId: string;

  accountType:
    | 'AUTOLOAN'
    | 'HOMEEQUITYLOAN'
    | 'INSTALLMENT'
    | 'LOAN'
    | 'MILITARYLOAN'
    | 'MORTGAGE'
    | 'PERSONALLOAN'
    | 'SMBLOAN'
    | 'STUDENTLOAN';

  currency: LoanAccount.Currency;

  /**
   * Marketed product name for this account. You can use this in UIs to assist in
   * account selection. For example, "Slash Platinum".
   */
  productName: string;

  status:
    | 'CLOSED'
    | 'DELINQUENT'
    | 'NEGATIVECURRENTBALANCE'
    | 'OPEN'
    | 'PAID'
    | 'PENDINGCLOSE'
    | 'PENDINGOPEN'
    | 'RESTRICTED';

  /**
   * A masked version of the account number, which includes the last 4 digits in
   * plain text.
   */
  accountNumberDisplay?: string;

  /**
   * A nickname or label for the account. This will be unique to the account, even if
   * the user has multiple accounts with the same product name. You can use this in
   * UIs to assist in account selection.
   */
  nickname?: string;
}

export namespace LoanAccount {
  export interface Currency {
    /**
     * The ISO 4217 currency code for the currency that the account is denominated in.
     * For example, "USD" for US Dollars.
     */
    currencyCode: string;
  }
}

export type AccountRetrieveResponse =
  | AccountRetrieveResponse.DepositAccount
  | AccountRetrieveResponse.LoanAccount
  | AccountRetrieveResponse.LocAccount
  | AccountRetrieveResponse.InvestmentAccount;

export namespace AccountRetrieveResponse {
  export interface DepositAccount {
    /**
     * A deposit account. For example, a checking, savings or money market account.
     */
    depositAccount: DepositAccount.DepositAccount;
  }

  export namespace DepositAccount {
    /**
     * A deposit account. For example, a checking, savings or money market account.
     */
    export interface DepositAccount extends AccountsAPI.DepositAccount {
      /**
       * The available balance of the account in the standard unit of the currency (e.g.,
       * dollars for USD). Available balance is the balance that is available to
       * spend/withdraw.
       */
      availableBalance: number;

      /**
       * The current balance of the account in the standard unit of the currency (e.g.,
       * dollars for USD). Current balance is the balance that is currently in the
       * account, including any pending transactions.
       */
      currentBalance: number;
    }
  }

  export interface LoanAccount {
    /**
     * A loan account. For example, mortgage, student loan or auto loan.
     */
    loanAccount: LoanAccount.LoanAccount;
  }

  export namespace LoanAccount {
    /**
     * A loan account. For example, mortgage, student loan or auto loan.
     */
    export interface LoanAccount extends AccountsAPI.LoanAccount {
      /**
       * The interest rate on the loan as a floating point number. For example, 0.05 for
       * 5%.
       */
      interestRate: number;

      /**
       * The type of interest rate on the loan.
       */
      interestRateType: 'FIXED' | 'VARIABLE';

      /**
       * The principal balance of the loan account in the standard unit of the currency
       * (e.g., dollars for USD). Principal balance is the amount of the loan that is
       * still owed.
       */
      principalBalance: number;

      /**
       * The escrow balance of the loan account in the standard unit of the currency
       * (e.g., dollars for USD). Escrow balance is the amount of money held in escrow to
       * pay for property taxes and insurance.
       */
      escrowBalance?: number;

      /**
       * The amount of interest paid on the loan year-to-date in the standard unit of the
       * currency (e.g., dollars for USD).
       */
      interestPaidYearToDate?: number;

      /**
       * The amount of the last payment made on the loan in the standard unit of the
       * currency (e.g., dollars for USD).
       */
      lastPaymentAmount?: number;

      /**
       * The date the last payment was made.
       */
      lastPaymentDate?: string;

      /**
       * The term of the loan in months.
       */
      loanTerm?: string;

      /**
       * The date the loan is scheduled to be paid off.
       */
      maturityDate?: string;

      /**
       * The amount of the next payment due on the loan in the standard unit of the
       * currency (e.g., dollars for USD).
       */
      nextPaymentAmount?: number;

      /**
       * The date the next payment is due.
       */
      nextPaymentDate?: string;

      /**
       * The original principal balance of the loan account in the standard unit of the
       * currency (e.g., dollars for USD). Original principal balance is the amount of
       * the loan when it was first taken out.
       */
      originalPrincipal?: number;

      /**
       * The date the loan was originated.
       */
      originatingDate?: string;
    }
  }

  export interface LocAccount {
    /**
     * A line-of-credit account. For example, a credit card or home equity line of
     * credit.
     */
    locAccount: LocAccount.LocAccount;
  }

  export namespace LocAccount {
    /**
     * A line-of-credit account. For example, a credit card or home equity line of
     * credit.
     */
    export interface LocAccount extends AccountsAPI.LineOfCreditAccount {
      /**
       * The currently available credit on the account in the standard unit of the
       * currency (e.g., dollars for USD).
       */
      availableCredit: number;

      /**
       * The current balance on the account in the standard unit of the currency (e.g.,
       * dollars for USD). This includes any outstanding charges, fees, and interest.
       */
      currentBalance: number;

      /**
       * The annual percentage rate (APR) for cash advances on the account.
       */
      advancesApr?: number;

      /**
       * The total credit line available on the account in the standard unit of the
       * currency (e.g., dollars for USD).
       */
      creditLine?: number;

      /**
       * The amount of the last payment made on the account in the standard unit of the
       * currency (e.g., dollars for USD).
       */
      lastPaymentAmount?: number;

      /**
       * The date the last payment was made.
       */
      lastPaymentDate?: string;

      /**
       * The balance on the account as of the last statement date in the standard unit of
       * the currency (e.g., dollars for USD).
       */
      lastStmtBalance?: number;

      /**
       * The date of the last statement.
       */
      lastStmtDate?: string;

      /**
       * The minimum payment due on the account in the standard unit of the currency
       * (e.g., dollars for USD).
       */
      minimumPaymentAmount?: number;

      /**
       * The amount of the next payment due on the account in the standard unit of the
       * currency (e.g., dollars for USD).
       */
      nextPaymentAmount?: number;

      /**
       * The date the next payment is due.
       */
      nextPaymentDate?: string;

      /**
       * The amount past due on the account in the standard unit of the currency (e.g.,
       * dollars for USD).
       */
      pastDueAmount?: number;

      /**
       * The principal balance on the account in the standard unit of the currency (e.g.,
       * dollars for USD).
       */
      principalBalance?: number;

      /**
       * The annual percentage rate (APR) for purchases on the account.
       */
      purchasesApr?: number;
    }
  }

  export interface InvestmentAccount {
    /**
     * An investment account. For example, a 401K or IRA.
     */
    investmentAccount: InvestmentAccount.InvestmentAccount;
  }

  export namespace InvestmentAccount {
    /**
     * An investment account. For example, a 401K or IRA.
     */
    export interface InvestmentAccount extends AccountsAPI.InvestmentAccount {
      /**
       * The amount of cash available in the account across all sub-accounts, including
       * sweep funds, in the standard unit of the currency (e.g., dollars for USD).
       */
      availableCashBalance: number;

      /**
       * The total current value of all investments in the standard unit of the currency
       * (e.g., dollars for USD).
       */
      currentValue: number;

      /**
       * The date and time the balance was last updated.
       */
      balanceAsOf?: string;

      /**
       * The holdings in the account.
       */
      holdings?: Array<InvestmentAccount.Holding>;
    }

    export namespace InvestmentAccount {
      export interface Holding {
        /**
         * If true, indicates that this holding is used to maintain proceeds from sales,
         * dividends, and other cash postings to the investment account.
         */
        cashAccount: boolean;

        /**
         * The market value of the holding in the standard unit of the currency (e.g.,
         * dollars for USD).
         */
        marketValue: number;

        currency?: Holding.Currency;

        /**
         * The current unit price of the security in the standard unit of the currency
         * (e.g., dollars for USD).
         */
        currentUnitPrice?: number;

        /**
         * The date and time the current unit price was last updated.
         */
        currentUnitPriceDate?: string;

        /**
         * The face value of the holding in the standard unit of the currency (e.g.,
         * dollars for USD).
         */
        faceValue?: number;

        fiAttributes?: Array<Holding.FiAttribute>;

        /**
         * The name of the security.
         */
        holdingName?: string;

        holdingSubType?: 'CASH' | 'MONEYMARKET';

        /**
         * The type of the holding.
         */
        holdingType?:
          | 'ANNUITY'
          | 'BOND'
          | 'CD'
          | 'DIGITALASSET'
          | 'MUTUALFUND'
          | 'OPTION'
          | 'OTHER'
          | 'STOCK';

        /**
         * The price at which the security was purchased in the standard unit of the
         * currency (e.g., dollars for USD).
         */
        purchasedPrice?: number;

        /**
         * The unique identifier of the security. Either securityId and securityIdType or
         * symbol will be provided.
         */
        securityId?: string;

        /**
         * The type of the security identifier.
         */
        securityIdType?:
          | 'CINS'
          | 'CMC'
          | 'CME'
          | 'CUSIP'
          | 'ISIN'
          | 'ITSA'
          | 'NASDAQ'
          | 'SEDOL'
          | 'SICC'
          | 'VALOR'
          | 'WKN';

        /**
         * The symbol of the security. Either securityId and securityIdType or symbol will
         * be provided.
         */
        symbol?: string;

        /**
         * The number of units of the security held.
         */
        units?: number;
      }

      export namespace Holding {
        export interface Currency {
          /**
           * The ISO 4217 currency code.
           */
          currencyCode: string;
        }

        export interface FiAttribute {
          name: string;

          value: string;
        }
      }
    }
  }
}

export interface AccountListResponse {
  accounts: Array<
    | AccountListResponse.DepositAccount
    | AccountListResponse.LoanAccount
    | AccountListResponse.LocAccount
    | AccountListResponse.InvestmentAccount
    | AccountListResponse.InsuranceAccount
    | AccountListResponse.AnnuityAccount
    | AccountListResponse.CommercialAccount
  >;

  page?: AccountListResponse.Page;
}

export namespace AccountListResponse {
  export interface DepositAccount {
    /**
     * A deposit account. For example, a checking, savings or money market account.
     */
    depositAccount: AccountsAPI.DepositAccount;
  }

  export interface LoanAccount {
    /**
     * A loan account. For example, mortgage, student loan or auto loan.
     */
    loanAccount: AccountsAPI.LoanAccount;
  }

  export interface LocAccount {
    /**
     * A line-of-credit account. For example, a credit card or home equity line of
     * credit.
     */
    locAccount: AccountsAPI.LineOfCreditAccount;
  }

  export interface InvestmentAccount {
    /**
     * An investment account. For example, a 401K or IRA.
     */
    investmentAccount: AccountsAPI.InvestmentAccount;
  }

  export interface InsuranceAccount {
    /**
     * An insurance account. For example, whole life insurance or short-term
     * disability.
     */
    insuranceAccount: InsuranceAccount.InsuranceAccount;
  }

  export namespace InsuranceAccount {
    /**
     * An insurance account. For example, whole life insurance or short-term
     * disability.
     */
    export interface InsuranceAccount {
      /**
       * Long-term persistent identity of the account, though not an account number.
       */
      accountId: string;

      accountType: 'LONGTERMDISABILITY' | 'SHORTTERMDISABILITY' | 'UNIVERSALLIFE' | 'WHOLELIFE';

      currency: InsuranceAccount.Currency;

      /**
       * Marketed product name for this account. You can use this in UIs to assist in
       * account selection. For example, "Slash Platinum".
       */
      productName: string;

      status:
        | 'CLOSED'
        | 'DELINQUENT'
        | 'NEGATIVECURRENTBALANCE'
        | 'OPEN'
        | 'PAID'
        | 'PENDINGCLOSE'
        | 'PENDINGOPEN'
        | 'RESTRICTED';

      /**
       * A masked version of the account number, which includes the last 4 digits in
       * plain text.
       */
      accountNumberDisplay?: string;

      /**
       * A nickname or label for the account. This will be unique to the account, even if
       * the user has multiple accounts with the same product name. You can use this in
       * UIs to assist in account selection.
       */
      nickname?: string;
    }

    export namespace InsuranceAccount {
      export interface Currency {
        /**
         * The ISO 4217 currency code for the currency that the account is denominated in.
         * For example, "USD" for US Dollars.
         */
        currencyCode: string;
      }
    }
  }

  export interface AnnuityAccount {
    /**
     * An annuity account. For example, a fixed or variable annuity account.
     */
    annuityAccount: AnnuityAccount.AnnuityAccount;
  }

  export namespace AnnuityAccount {
    /**
     * An annuity account. For example, a fixed or variable annuity account.
     */
    export interface AnnuityAccount {
      /**
       * Long-term persistent identity of the account, though not an account number.
       */
      accountId: string;

      accountType: 'ANNUITY' | 'FIXEDANNUITY' | 'VARIABLEANNUITY';

      currency: AnnuityAccount.Currency;

      /**
       * Marketed product name for this account. You can use this in UIs to assist in
       * account selection. For example, "Slash Platinum".
       */
      productName: string;

      status:
        | 'CLOSED'
        | 'DELINQUENT'
        | 'NEGATIVECURRENTBALANCE'
        | 'OPEN'
        | 'PAID'
        | 'PENDINGCLOSE'
        | 'PENDINGOPEN'
        | 'RESTRICTED';

      /**
       * A masked version of the account number, which includes the last 4 digits in
       * plain text.
       */
      accountNumberDisplay?: string;

      /**
       * A nickname or label for the account. This will be unique to the account, even if
       * the user has multiple accounts with the same product name. You can use this in
       * UIs to assist in account selection.
       */
      nickname?: string;
    }

    export namespace AnnuityAccount {
      export interface Currency {
        /**
         * The ISO 4217 currency code for the currency that the account is denominated in.
         * For example, "USD" for US Dollars.
         */
        currencyCode: string;
      }
    }
  }

  export interface CommercialAccount {
    /**
     * A commercial account. For example, a business deposit account.
     */
    commercialAccount: CommercialAccount.CommercialAccount;
  }

  export namespace CommercialAccount {
    /**
     * A commercial account. For example, a business deposit account.
     */
    export interface CommercialAccount {
      /**
       * Long-term persistent identity of the account, though not an account number.
       */
      accountId: string;

      accountType: 'COMMERCIALDEPOSIT' | 'COMMERCIALLOAN' | 'COMMERCIALLINEOFCREDIT' | 'COMMERCIALINVESTMENT';

      currency: CommercialAccount.Currency;

      /**
       * Marketed product name for this account. You can use this in UIs to assist in
       * account selection. For example, "Slash Platinum".
       */
      productName: string;

      status:
        | 'CLOSED'
        | 'DELINQUENT'
        | 'NEGATIVECURRENTBALANCE'
        | 'OPEN'
        | 'PAID'
        | 'PENDINGCLOSE'
        | 'PENDINGOPEN'
        | 'RESTRICTED';

      /**
       * A masked version of the account number, which includes the last 4 digits in
       * plain text.
       */
      accountNumberDisplay?: string;

      /**
       * A nickname or label for the account. This will be unique to the account, even if
       * the user has multiple accounts with the same product name. You can use this in
       * UIs to assist in account selection.
       */
      nickname?: string;
    }

    export namespace CommercialAccount {
      export interface Currency {
        /**
         * The ISO 4217 currency code for the currency that the account is denominated in.
         * For example, "USD" for US Dollars.
         */
        currencyCode: string;
      }
    }
  }

  export interface Page {
    nextOffset?: string;
  }
}

export interface AccountListTransactionsResponse {
  transactions: Array<
    | AccountListTransactionsResponse.DepositTransaction
    | AccountListTransactionsResponse.LoanTransaction
    | AccountListTransactionsResponse.LocTransaction
    | AccountListTransactionsResponse.InvestmentTransaction
  >;

  page?: AccountListTransactionsResponse.Page;
}

export namespace AccountListTransactionsResponse {
  export interface DepositTransaction {
    depositTransaction: DepositTransaction.DepositTransaction;
  }

  export namespace DepositTransaction {
    export interface DepositTransaction {
      /**
       * The amount of money in the account currency in that currency's standard unit
       * (e.g. dollars for USD). The amount is an absolute value. The debitCreditMemo
       * parameter indicates the direction of the transaction.
       */
      amount: number;

      /**
       * The posting type of a transaction. The transaction amount is an absolute value,
       * and this parameter indicates the direction of the transaction. This will always
       * be DEBIT or CREDIT.
       */
      debitCreditMemo: 'DEBIT' | 'CREDIT' | 'MEMO';

      /**
       * A description of the transaction.
       */
      description: string;

      /**
       * The status of the transaction. This will always be PENDING or POSTED.
       */
      status: 'AUTHORIZATION' | 'MEMO' | 'PENDING' | 'PENDING_APPROVAL' | 'POSTED' | 'IN_REVIEW';

      /**
       * Long-term persistent identity of the transaction.
       */
      transactionId: string;

      /**
       * The ISO 8601 date and time that the transaction was initiated.
       */
      transactionTimestamp: string;

      /**
       * The merchant category code (MCC) of the transaction, if available.
       */
      category?: string;

      /**
       * The check number of the transaction, if available. Only included if this is a
       * check transaction.
       */
      checkNumber?: string;

      /**
       * This value is only included if the transaction's currency is different than the
       * account's default currency.
       */
      foreignAmount?: number;

      /**
       * ISO 4217 currency code. This value is only included if the transaction's
       * currency is different than the account's default currency.
       */
      foreignCurrency?: string;

      payee?: string;

      /**
       * The ISO 8601 date and time that the transaction was posted to the account. This
       * will be included if status is POSTED.
       */
      postedTimestamp?: string;

      /**
       * For reverse postings, the identity of the transaction being reversed. For the
       * correction transaction, the identity of the reversing post. For credit card
       * posting transactions, the identity of the authorization transaction
       */
      referenceTransactionId?: string;

      /**
       * Additional information about the transaction category, if available.
       */
      subCategory?: string;
    }
  }

  export interface LoanTransaction {
    loanTransaction: LoanTransaction.LoanTransaction;
  }

  export namespace LoanTransaction {
    export interface LoanTransaction {
      /**
       * The amount of money in the account currency in that currency's standard unit
       * (e.g. dollars for USD). The amount is an absolute value. The debitCreditMemo
       * parameter indicates the direction of the transaction.
       */
      amount: number;

      /**
       * The posting type of a transaction. The transaction amount is an absolute value,
       * and this parameter indicates the direction of the transaction. This will always
       * be DEBIT or CREDIT.
       */
      debitCreditMemo: 'DEBIT' | 'CREDIT' | 'MEMO';

      /**
       * A description of the transaction.
       */
      description: string;

      /**
       * The status of the transaction. This will always be PENDING or POSTED.
       */
      status: 'AUTHORIZATION' | 'MEMO' | 'PENDING' | 'IN_REVIEW' | 'POSTED';

      /**
       * Long-term persistent identity of the transaction.
       */
      transactionId: string;

      /**
       * The ISO 8601 date and time that the transaction was initiated.
       */
      transactionTimestamp: string;

      /**
       * The merchant category code (MCC) of the transaction, if available.
       */
      category?: string;

      /**
       * This value is only included if the transaction's currency is different than the
       * account's default currency.
       */
      foreignAmount?: number;

      /**
       * ISO 4217 currency code. This value is only included if the transaction's
       * currency is different than the account's default currency.
       */
      foreignCurrency?: string;

      /**
       * The ISO 8601 date and time that the transaction was posted to the account. This
       * will be included if status is POSTED.
       */
      postedTimestamp?: string;

      /**
       * For reverse postings, the identity of the transaction being reversed. For the
       * correction transaction, the identity of the reversing post. For credit card
       * posting transactions, the identity of the authorization transaction
       */
      referenceTransactionId?: string;

      /**
       * Additional information about the transaction category, if available.
       */
      subCategory?: string;

      transactionType?:
        | 'ADJUSTMENT'
        | 'FEE'
        | 'INTEREST'
        | 'PAYMENT'
        | 'LUMP_SUM_PAYMENT'
        | 'SKIP_PAYMENT'
        | 'DOUBLE_UP_PAYMENT'
        | 'PAYOFF';
    }
  }

  export interface LocTransaction {
    locTransaction: LocTransaction.LocTransaction;
  }

  export namespace LocTransaction {
    export interface LocTransaction {
      /**
       * The amount of money in the account currency in that currency's standard unit
       * (e.g. dollars for USD). The amount is an absolute value. The debitCreditMemo
       * parameter indicates the direction of the transaction.
       */
      amount: number;

      /**
       * The posting type of a transaction. The transaction amount is an absolute value,
       * and this parameter indicates the direction of the transaction. This will always
       * be DEBIT or CREDIT.
       */
      debitCreditMemo: 'DEBIT' | 'CREDIT' | 'MEMO';

      /**
       * A description of the transaction.
       */
      description: string;

      /**
       * The status of the transaction. This will always be PENDING or POSTED.
       */
      status: 'AUTHORIZATION' | 'MEMO' | 'PENDING' | 'PENDING_APPROVAL' | 'IN_REVIEW' | 'POSTED';

      /**
       * Long-term persistent identity of the transaction.
       */
      transactionId: string;

      /**
       * The ISO 8601 date and time that the transaction was initiated.
       */
      transactionTimestamp: string;

      /**
       * The merchant category code (MCC) of the transaction, if available.
       */
      category?: string;

      /**
       * The check number of the transaction, if available. Only included if
       * transactionType is CHECK.
       */
      checkNumber?: number;

      /**
       * This value is only included if the transaction's currency is different than the
       * account's default currency.
       */
      foreignAmount?: number;

      /**
       * ISO 4217 currency code. This value is only included if the transaction's
       * currency is different than the account's default currency.
       */
      foreignCurrency?: string;

      /**
       * The ISO 8601 date and time that the transaction was posted to the account. This
       * will be included if status is POSTED.
       */
      postedTimestamp?: string;

      /**
       * For reverse postings, the identity of the transaction being reversed. For the
       * correction transaction, the identity of the reversing post. For credit card
       * posting transactions, the identity of the authorization transaction
       */
      referenceTransactionId?: string;

      /**
       * Additional information about the transaction category, if available.
       */
      subCategory?: string;

      transactionType?: 'ADJUSTMENT' | 'CHECK' | 'FEE' | 'INTEREST' | 'PAYMENT' | 'WITHDRAWAL';
    }
  }

  export interface InvestmentTransaction {
    investmentTransaction: InvestmentTransaction.InvestmentTransaction;
  }

  export namespace InvestmentTransaction {
    export interface InvestmentTransaction {
      /**
       * The amount of money in the account currency in that currency's standard unit
       * (e.g. dollars for USD). The amount is an absolute value. The debitCreditMemo
       * parameter indicates the direction of the transaction.
       */
      amount: number;

      /**
       * The posting type of a transaction. The transaction amount is an absolute value,
       * and this parameter indicates the direction of the transaction. This will always
       * be DEBIT or CREDIT.
       */
      debitCreditMemo: 'DEBIT' | 'CREDIT' | 'MEMO';

      /**
       * A description of the transaction.
       */
      description: string;

      fees: number;

      /**
       * The status of the transaction. This will always be PENDING or POSTED.
       */
      status: 'AUTHORIZATION' | 'MEMO' | 'PENDING' | 'POSTED';

      /**
       * Long-term persistent identity of the transaction.
       */
      transactionId: string;

      /**
       * The ISO 8601 date and time that the transaction was initiated.
       */
      transactionTimestamp: string;

      /**
       * The merchant category code (MCC) of the transaction, if available.
       */
      category?: string;

      commission?: number;

      fiAttributes?: Array<InvestmentTransaction.FiAttribute>;

      /**
       * This value is only included if the transaction's currency is different than the
       * account's default currency.
       */
      foreignAmount?: number;

      /**
       * ISO 4217 currency code. This value is only included if the transaction's
       * currency is different than the account's default currency.
       */
      foreignCurrency?: string;

      /**
       * The ISO 8601 date and time that the transaction was posted to the account. This
       * will be included if status is POSTED.
       */
      postedTimestamp?: string;

      /**
       * For reverse postings, the identity of the transaction being reversed. For the
       * correction transaction, the identity of the reversing post. For credit card
       * posting transactions, the identity of the authorization transaction
       */
      referenceTransactionId?: string;

      /**
       * The security identifier for the transaction, if applicable.
       */
      securityId?: string;

      securityIdType?:
        | 'CINS'
        | 'CMC'
        | 'CME'
        | 'CUSIP'
        | 'ISIN'
        | 'ITSA'
        | 'NASDAQ'
        | 'SEDOL'
        | 'SICC'
        | 'VALOR'
        | 'WKN';

      securityType?: 'BOND' | 'DEBT' | 'DIGITALASSET' | 'MUTUALFUND' | 'OPTION' | 'OTHER' | 'STOCK' | 'SWEEP';

      /**
       * Additional information about the transaction category, if available.
       */
      subCategory?: string;

      /**
       * Ticker symbol
       */
      symbol?: string;

      transactionType?:
        | 'ADJUSTMENT'
        | 'ATM'
        | 'CASH'
        | 'CHECK'
        | 'CLOSURE'
        | 'CLOSUREOPT'
        | 'CONTRIBUTION'
        | 'DEP'
        | 'DEPOSIT'
        | 'DIRECTDEBIT'
        | 'DIRECTDEP'
        | 'DIV'
        | 'DIVIDEND'
        | 'DIVIDENDREINVEST'
        | 'EXPENSE'
        | 'FEE'
        | 'INCOME'
        | 'INTEREST'
        | 'INVEXPENSE'
        | 'JRNLFUND'
        | 'JRNLSEC'
        | 'MARGININTEREST'
        | 'OPTIONEXERCISE'
        | 'OPTIONEXPIRATION'
        | 'OTHER'
        | 'PAYMENT'
        | 'POS'
        | 'PURCHASED'
        | 'PURCHASEDTOCOVER'
        | 'PURCHASETOCLOSE'
        | 'PURCHASETOOPEN'
        | 'REINVESTOFINCOME'
        | 'REPEATPMT'
        | 'RETURNOFCAPITAL'
        | 'SOLD'
        | 'SOLDTOCLOSE'
        | 'SOLDTOOPEN'
        | 'SPLIT'
        | 'SRVCHG'
        | 'TRANSFER'
        | 'XFER';

      unitPrice?: number;

      units?: number;

      unitType?: 'CURRENCY' | 'SHARES';
    }

    export namespace InvestmentTransaction {
      export interface FiAttribute {
        name: string;

        value: string;
      }
    }
  }

  export interface Page {
    nextOffset?: string;
  }
}

export interface AccountRetrieveContactResponse {
  addresses: Array<AccountRetrieveContactResponse.Address>;

  emails: Array<string>;

  holders: Array<AccountRetrieveContactResponse.Holder>;

  telephones: Array<AccountRetrieveContactResponse.Telephone>;
}

export namespace AccountRetrieveContactResponse {
  export interface Address {
    city: string;

    /**
     * Iso3166CountryCode
     */
    country: string;

    line1: string;

    line2: string;

    line3?: string;

    postalCode?: string;

    /**
     * State or province or territory.
     */
    region?: string;
  }

  export interface Holder {
    name: Holder.Name;
  }

  export namespace Holder {
    export interface Name {
      first: string;

      last: string;

      middle: string;

      prefix?: string;

      suffix?: string;
    }
  }

  export interface Telephone {
    /**
     * Telephone subscriber number defined by ITU-T recommendation E.164
     */
    number: string;

    type: 'HOME' | 'BUSINESS' | 'CELL' | 'FAX';

    /**
     * Country calling codes defined by ITU-T recommendations E.123 and E.164
     */
    country?: string;
  }
}

export interface AccountRetrievePaymentNetworksResponse {
  paymentNetworks: Array<AccountRetrievePaymentNetworksResponse.PaymentNetwork>;

  page?: AccountRetrievePaymentNetworksResponse.Page;
}

export namespace AccountRetrievePaymentNetworksResponse {
  export interface PaymentNetwork {
    /**
     * Bank identifier used by the payment network ie. Routing Number
     */
    bankId: string;

    /**
     * The number used to identify the account within the payment network.
     */
    identifier: string;

    /**
     * Indicates if the account can receive transfers from the payment network. If the
     * account is closed or locked, this will be false.
     */
    transferIn: boolean;

    /**
     * Indicates if the account can send transfers to the payment network. If the
     * account is closed or locked, this will be false.
     */
    transferOut: boolean;

    type: 'US_ACH' | 'US_FEDWIRE' | 'US_CHIPS' | 'US_RTP' | 'CA_ACSS' | 'CA_LVTS';
  }

  export interface Page {
    nextOffset?: string;
  }
}

export interface AccountListParams {
  /**
   * The number of items to return (default 100, max 1000)
   */
  limit?: string;

  /**
   * The number of items to skip before starting to collect the result set
   */
  offset?: string;
}

export interface AccountListTransactionsParams {
  /**
   * End time for use in retrieval of transactions (ISO 8601).
   */
  endTime?: string;

  /**
   * The number of items to return (default 100, max 1000)
   */
  limit?: string;

  /**
   * The ID of the last item in the previous page of results
   */
  offset?: string;

  /**
   * Start time for use in retrieval of transactions (ISO 8601).
   */
  startTime?: string;
}

export interface AccountRetrievePaymentNetworksParams {
  /**
   * The number of items to return (default 100, max 1000)
   */
  limit?: string;

  /**
   * The ID of the last item in the previous page of results
   */
  offset?: string;
}

Accounts.Statements = Statements;

export declare namespace Accounts {
  export {
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

  export {
    Statements as Statements,
    type StatementListResponse as StatementListResponse,
    type StatementListParams as StatementListParams,
    type StatementRetrievePdfParams as StatementRetrievePdfParams,
  };
}
