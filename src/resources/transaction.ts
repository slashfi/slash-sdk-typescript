// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionAPI from './transaction';
import * as LegalEntityAPI from './legal-entity';
import * as CardAPI from './card/card';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TransactionResource extends APIResource {
  /**
   * Fetch details for a single transaction by ID
   */
  retrieve(transactionID: string, options?: RequestOptions): APIPromise<Transaction> {
    return this._client.get(path`/transaction/${transactionID}`, options);
  }

  /**
   * Get all transactions
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/transaction', { query, ...options });
  }

  /**
   * Get transaction aggregations
   */
  aggregate(
    query: TransactionAggregateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionAggregateResponse> {
    return this._client.get('/transaction/aggregation', { query, ...options });
  }

  /**
   * Fetch breakdown of a fee transaction
   */
  retrieveFeeDetails(
    transactionID: string,
    options?: RequestOptions,
  ): APIPromise<TransactionRetrieveFeeDetailsResponse> {
    return this._client.get(path`/transaction/${transactionID}/fee-details`, options);
  }

  /**
   * Update note for a transaction
   */
  updateNote(
    transactionID: string,
    body: TransactionUpdateNoteParams,
    options?: RequestOptions,
  ): APIPromise<TransactionUpdateNoteResponse> {
    return this._client.patch(path`/transaction/${transactionID}/note`, { body, ...options });
  }
}

export interface Transaction {
  id: string;

  /**
   * The account ID associated with the transaction
   */
  accountId: unknown;

  /**
   * For charge cards, specifies if the transaction belongs to the cash or credit
   * account. For debit accounts, this field is always cash.
   */
  accountSubtype: 'cash' | 'credit';

  /**
   * The amount of the transaction in cents in USD. If the transaction amount is
   * negative, the transaction is a debit. If the transaction amount is positive, the
   * transaction is a credit.
   */
  amountCents: number;

  /**
   * The date in UTC time when the transaction was posted. If the transaction is
   * pending or failed, this is the date the transaction was created.
   */
  date: string;

  description: string;

  /**
   * - `pending_approval`: Used for any transaction type that is pending approval.
   *   This does not affect the account's available or posted balances.
   * - `pending`: Used for any transaction type that has not posted to the account
   *   yet, but is affecting the account's available balance.
   * - `canceled`: Used for any transaction that was canceled.
   * - `failed`: Used for any transaction that failed to post to the account.
   * - `settled`: Used for any transaction that has posted to the account, except for
   *   card refunds, which use the `refund` status, and ACH returns, which use the
   *   `returned` status.
   * - `declined`: Used for card transactions that were declined.
   * - `refund`: Used for card transactions that were refunded, increasing the
   *   account's available and posted balances.
   * - `reversed`: Used for card transactions that were authorized, but reversed by
   *   the merchant.
   * - `returned`: Used for ACH returns. In the case of an ACH return, there are two
   *   possibilities: (1) if the ACH settled and then returned, then there will be
   *   one transaction with status `settled` for the ACH settling, and one
   *   transaction with status `returned` for the ACH return. Both of these are
   *   posted transactions. (2) if the ACH returned before settling, then there will
   *   only be one transaction with status `canceled`.
   * - `dispute`: Used for disputed card transactions.
   */
  detailedStatus:
    | 'pending'
    | 'pending_approval'
    | 'in_review'
    | 'canceled'
    | 'failed'
    | 'settled'
    | 'declined'
    | 'refund'
    | 'reversed'
    | 'returned'
    | 'dispute';

  /**
   * - `pending`: The transaction is pending and has not been posted to the account
   *   yet (the account's posted balance doesn't reflect the transaction yet, but the
   *   account's available balance does).
   * - `posted`: The transaction has been posted to the account and the account's
   *   posted balance and available balances both reflect the transaction.
   * - `failed`: The transaction failed to post to the account and no longer affects
   *   the account's available or posted balances.
   */
  status: 'pending' | 'posted' | 'failed';

  /**
   * Information about the associated ACH transfer if the transaction is an ACH
   * transfer.
   */
  achInfo?: Transaction.ACHInfo;

  /**
   * The reason for the approval. Only exists for card transactions with
   * `detailedStatus` = `pending` or `settled`.
   */
  approvalReason?: string;

  /**
   * The UTC timestamp of when the transaction was authorized. Only exists for card
   * transactions.
   */
  authorizedAt?: string;

  /**
   * The card ID associated with the transaction. If the transaction is not
   * associated with a card, this field is not sent.
   */
  cardId?: string;

  /**
   * Information populated if this transaction is a crypto on/off-ramp transaction.
   */
  cryptoInfo?: Transaction.CryptoInfo;

  /**
   * The reason for the decline. Only exists for card transactions with
   * `detailedStatus` = `declined`.
   */
  declineReason?: string;

  /**
   * Information populated if this transaction is a fee assessed by Slash.
   */
  feeInfo?: Transaction.FeeInfo;

  /**
   * The memo associated with the transaction. For virtual account transfers, this is
   * the memo provided when creating the transfer. For ACH transactions, this is the
   * company entry description. For wire transactions, this is the sender reference.
   */
  memo?: string;

  /**
   * For card transactions, contains description of the transaction as reported by
   * the merchant, merchant category code, and location of the merchant or origin of
   * the transaction. For other transactions, this field is undefined.
   */
  merchantData?: Transaction.MerchantData;

  /**
   * @deprecated DEPRECATED. Use `merchantData.description` instead. For card
   * transactions, the description of the transaction as reported by the merchant.
   * For other transactions, this field is undefined.
   */
  merchantDescription?: string;

  /**
   * The order ID, as reported by the merchant, associated with the specific
   * transaction.
   */
  orderId?: string;

  /**
   * The original currency of the transaction. This is only applicable to
   * transactions. If this field is not sent, the original currency is in USD.
   */
  originalCurrency?: Transaction.OriginalCurrency;

  /**
   * The provider authorization ID for the transaction. Only exists for card
   * transactions.
   */
  providerAuthorizationId?: string;

  /**
   * The reference number provided by Visa for this transaction.
   */
  referenceNumber?: string;

  /**
   * Information about the associated Real-Time Payment (RTP) transfer if the
   * transaction is a real-time transfer.
   */
  rtpInfo?: Transaction.RtpInfo;

  /**
   * The virtual account ID where the transaction occurred
   */
  virtualAccountId?: string;

  /**
   * Information about the associated wire transfer if the transaction is a wire
   * transfer.
   */
  wireInfo?: Transaction.WireInfo;
}

export namespace Transaction {
  /**
   * Information about the associated ACH transfer if the transaction is an ACH
   * transfer.
   */
  export interface ACHInfo {
    /**
     * Optional data field that can be used by the originating company for internal
     * purposes
     */
    companyDiscretionaryData: string;

    /**
     * The company identification number assigned by the originating depository
     * financial institution
     */
    companyId: string;

    /**
     * A three-character code that identifies the type of ACH entry (e.g., PPD for
     * Prearranged Payment and Deposit, CCD for Corporate Credit or Debit)
     */
    entryClassCode: string;

    /**
     * Additional information related to the payment, such as invoice numbers, payment
     * references, or other payment-specific details
     */
    paymentRelatedInfo: string;

    /**
     * The unique identifier for the receiver of the ACH transfer
     */
    receiverId: string;

    /**
     * A unique number assigned by the originating depository financial institution to
     * identify the ACH entry
     */
    traceNumber: string;

    /**
     * An optional description of the purpose of the ACH entry as provided by the
     * originating company
     */
    companyEntryDescription?: string;

    /**
     * The name of the bank or financial institution of the counterparty in the ACH
     * transfer
     */
    counterpartyBank?: string;
  }

  /**
   * Information populated if this transaction is a crypto on/off-ramp transaction.
   */
  export interface CryptoInfo {
    /**
     * The sender address of the crypto on/off-ramp transaction.
     */
    senderAddress?: string;

    /**
     * The transaction hash of the crypto on/off-ramp transaction.
     */
    txHash?: string;
  }

  /**
   * Information populated if this transaction is a fee assessed by Slash.
   */
  export interface FeeInfo {
    relatedTransaction?: FeeInfo.RelatedTransaction;
  }

  export namespace FeeInfo {
    export interface RelatedTransaction {
      id: string;

      amount: number;
    }
  }

  /**
   * For card transactions, contains description of the transaction as reported by
   * the merchant, merchant category code, and location of the merchant or origin of
   * the transaction. For other transactions, this field is undefined.
   */
  export interface MerchantData {
    /**
     * The merchant's category code (MCC)
     */
    categoryCode: string;

    /**
     * The raw description provided by the merchant for the transaction.
     */
    description: string;

    /**
     * Location details for the merchant/transaction.
     */
    location?: MerchantData.Location;
  }

  export namespace MerchantData {
    /**
     * Location details for the merchant/transaction.
     */
    export interface Location {
      /**
       * The city of the merchant.
       */
      city: string;

      /**
       * The country of the merchant.
       */
      country: string;

      /**
       * The state/province of the merchant.
       */
      state: string;

      /**
       * The ZIP/postal code of the merchant.
       */
      zip: string;
    }
  }

  /**
   * The original currency of the transaction. This is only applicable to
   * transactions. If this field is not sent, the original currency is in USD.
   */
  export interface OriginalCurrency {
    /**
     * The amount of the transaction in its original currency in cents.
     */
    amountCents: number;

    /**
     * The original currency code of the transaction
     */
    code: string;

    /**
     * The conversion rate used to convert the transaction amount from its original
     * currency to the account currency. The currency rate is computed at the time of
     * the transaction.
     */
    conversionRate: number;
  }

  /**
   * Information about the associated Real-Time Payment (RTP) transfer if the
   * transaction is a real-time transfer.
   */
  export interface RtpInfo {
    /**
     * The name of the bank or financial institution of the counterparty in the
     * real-time transfer
     */
    counterpartyBank?: string;

    /**
     * Additional description or purpose of the real-time payment
     */
    description?: string;

    /**
     * A unique end-to-end identifier for the real-time payment transaction that
     * remains with the payment throughout its lifecycle
     */
    endToEndId?: string;

    /**
     * The name of the originator of the real-time payment
     */
    originatorName?: string;

    /**
     * The routing number of the counterparty's bank
     */
    routingNumber?: string;
  }

  /**
   * Information about the associated wire transfer if the transaction is a wire
   * transfer.
   */
  export interface WireInfo {
    /**
     * A code that identifies the business function or purpose of the wire transfer
     * (e.g., customer transfer, bank transfer, etc.)
     */
    businessFunctionCode: string;

    /**
     * Incoming Message Authentication Data - a unique identifier assigned by the
     * receiving bank for the incoming wire transfer. If the other bank is an account
     * with Column N.A., this field is empty.
     */
    imad: string;

    /**
     * Outgoing Message Authentication Data - a unique identifier assigned by the
     * originating bank for the outgoing wire transfer. If the other bank is an account
     * with Column N.A., this field is empty.
     */
    omad: string;

    /**
     * A reference number or identifier provided by the sender of the wire transfer for
     * tracking purposes
     */
    senderReference: string;

    /**
     * A code that identifies the specific type or subtype of the wire transfer
     */
    subtypeCode: string;

    /**
     * A code that identifies the type of wire transfer (e.g., domestic, international)
     */
    typeCode: string;

    /**
     * The name of the bank or financial institution of the counterparty in the wire
     * transfer
     */
    counterpartyBank?: string;
  }
}

export interface TransactionListResponse {
  items: Array<Transaction>;

  /**
   * Response sent when requesting a list of data
   */
  metadata?: LegalEntityAPI.PaginationResponse;
}

export interface TransactionAggregateResponse {
  /**
   * The total count of transactions.
   */
  count: number;

  /**
   * The net change, which is `totalIn` + `totalOut`.
   */
  netChange: number;

  /**
   * The total amount of money that arrived into the account, in cents.
   */
  totalIn: number;

  /**
   * The total amount of money that was sent out of the account, in cents.
   */
  totalOut: number;
}

export interface TransactionRetrieveFeeDetailsResponse {
  items: Array<TransactionRetrieveFeeDetailsResponse.Item>;
}

export namespace TransactionRetrieveFeeDetailsResponse {
  export interface Item {
    id: string;

    accountId: string;

    dateCharged: string;

    feeAmountCents: number;

    feeType: string;

    card?: CardAPI.Card;

    originalTransaction?: TransactionAPI.Transaction;
  }
}

export interface TransactionUpdateNoteResponse {
  success: boolean;
}

export interface TransactionListParams {
  /**
   * Use filter:accountId to filter by account ID
   */
  accountId?: string;

  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;

  /**
   * Pass in an account ID to filter transactions by account ID. This will return all
   * transactions that match the account ID passed in.
   */
  'filter:accountId'?: string;

  /**
   * Filter transactions by cardId
   */
  'filter:cardId'?: string;

  /**
   * Filter transactions by detailed status
   */
  'filter:detailed_status'?:
    | 'pending'
    | 'canceled'
    | 'failed'
    | 'settled'
    | 'declined'
    | 'refund'
    | 'reversed'
    | 'returned'
    | 'dispute';

  /**
   * Pass in a unix timestamp in milliseconds to filter transactions by authorization
   * time. This will return all transactions that are authorized on or after the date
   * passed in.
   */
  'filter:from_authorized_at'?: string;

  /**
   * Pass in a unix timestamp in milliseconds to filter transactions by date. This
   * will return all transactions that occurred on or after the date passed in.
   */
  'filter:from_date'?: string;

  /**
   * Pass in a legal entity ID to filter transactions by accounts under a specific
   * legal entity.
   */
  'filter:legalEntityId'?: string;

  /**
   * Filter transactions by provider authorization ID
   */
  'filter:providerAuthorizationId'?: string;

  /**
   * Filter transactions by status
   */
  'filter:status'?: 'pending' | 'posted' | 'failed';

  /**
   * Pass in a unix timestamp in milliseconds to filter transactions by authorization
   * time. This will return all transactions that are authorized on or before the
   * date passed in.
   */
  'filter:to_authorized_at'?: string;

  /**
   * Pass in a unix timestamp in milliseconds to filter transactions by date. This
   * will return all transactions that occurred on or before the date passed in.
   */
  'filter:to_date'?: string;

  /**
   * Pass in a virtual account ID to filter transactions by virtual account ID. This
   * will return all transactions that match the virtual account ID passed in.
   */
  'filter:virtualAccountId'?: string;
}

export interface TransactionAggregateParams {
  /**
   * Use filter:accountId to filter by account ID
   */
  accountId?: string;

  /**
   * Pass in an account ID to filter transactions by account ID. This will return all
   * transactions that match the account ID passed in.
   */
  'filter:accountId'?: string;

  /**
   * Filter transactions by cardId
   */
  'filter:cardId'?: string;

  /**
   * Filter transactions by detailed status
   */
  'filter:detailed_status'?:
    | 'pending'
    | 'canceled'
    | 'failed'
    | 'settled'
    | 'declined'
    | 'refund'
    | 'reversed'
    | 'returned'
    | 'dispute';

  /**
   * Pass in a unix timestamp in milliseconds to filter transactions by authorization
   * time. This will return all transactions that are authorized on or after the date
   * passed in.
   */
  'filter:from_authorized_at'?: string;

  /**
   * Pass in a unix timestamp in milliseconds to filter transactions by date. This
   * will return all transactions that occurred on or after the date passed in.
   */
  'filter:from_date'?: string;

  /**
   * Pass in a legal entity ID to filter transactions by accounts under a specific
   * legal entity.
   */
  'filter:legalEntityId'?: string;

  /**
   * Filter transactions by status
   */
  'filter:status'?: 'pending' | 'posted' | 'failed';

  /**
   * Pass in a unix timestamp in milliseconds to filter transactions by authorization
   * time. This will return all transactions that are authorized on or before the
   * date passed in.
   */
  'filter:to_authorized_at'?: string;

  /**
   * Pass in a unix timestamp in milliseconds to filter transactions by date. This
   * will return all transactions that occurred on or before the date passed in.
   */
  'filter:to_date'?: string;

  /**
   * Pass in a virtual account ID to filter transactions by virtual account ID. This
   * will return all transactions that match the virtual account ID passed in.
   */
  'filter:virtualAccountId'?: string;
}

export interface TransactionUpdateNoteParams {
  note: string;
}

export declare namespace TransactionResource {
  export {
    type Transaction as Transaction,
    type TransactionListResponse as TransactionListResponse,
    type TransactionAggregateResponse as TransactionAggregateResponse,
    type TransactionRetrieveFeeDetailsResponse as TransactionRetrieveFeeDetailsResponse,
    type TransactionUpdateNoteResponse as TransactionUpdateNoteResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionAggregateParams as TransactionAggregateParams,
    type TransactionUpdateNoteParams as TransactionUpdateNoteParams,
  };
}
