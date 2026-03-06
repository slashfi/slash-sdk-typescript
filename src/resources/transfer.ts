// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Transfer extends APIResource {
  /**
   * Transfer money between Virtual Accounts or fund a Virtual Account from a Primary
   * Account
   */
  createVirtualAccountTransfer(
    params: TransferCreateVirtualAccountTransferParams,
    options?: RequestOptions,
  ): APIPromise<TransferCreateVirtualAccountTransferResponse> {
    const { 'X-Idempotency-Key': xIdempotencyKey, ...body } = params;
    return this._client.post('/transfer/virtual-account', {
      body,
      ...options,
      headers: buildHeaders([{ 'X-Idempotency-Key': xIdempotencyKey }, options?.headers]),
    });
  }
}

export interface TransferCreateVirtualAccountTransferResponse {
  /**
   * The ID of the transfer that was created.
   */
  transferId: string;
}

export interface TransferCreateVirtualAccountTransferParams {
  /**
   * Body param: The amount of money to send in cents.
   */
  amountCents: number;

  /**
   * Body param: The ID of the virtual account to transfer money to.
   */
  destination: string;

  /**
   * Body param: The ID of the virtual account to transfer money from. Can also be
   * the virtual account linked to a primary Slash account to fund a new virtual
   * account (Virtual account with the name 'Primary account').
   */
  source: string;

  /**
   * Header param: Unique key to ensure idempotency of the transfer.
   */
  'X-Idempotency-Key': string;

  /**
   * Body param: Optional memo/description for the transfer to help differentiate
   * transactions.
   */
  memo?: string;
}

export declare namespace Transfer {
  export {
    type TransferCreateVirtualAccountTransferResponse as TransferCreateVirtualAccountTransferResponse,
    type TransferCreateVirtualAccountTransferParams as TransferCreateVirtualAccountTransferParams,
  };
}
