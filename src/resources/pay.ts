// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Pay extends APIResource {
  /**
   * Retrieve your pay by slash information.
   */
  retrieve(options?: RequestOptions): APIPromise<SlashHandle> {
    return this._client.get('/pay', options);
  }

  /**
   * Send money to a slash handle
   */
  send(body: PaySendParams, options?: RequestOptions): APIPromise<PaySendResponse> {
    return this._client.post('/pay', { body, ...options });
  }
}

/**
 * Details about a single SlashHandle
 */
export interface SlashHandle {
  /**
   * The id of the SlashHandle
   */
  id: string;

  /**
   * The ID of the account that will send and receive funds for this entity
   */
  accountId: string;

  /**
   * The display name of the entity
   */
  name: string;

  /**
   * The username that others can use to send money to this entity
   */
  slashHandle: string;
}

export type PaySendResponse = PaySendResponse.UnionMember0 | PaySendResponse.UnionMember1;

export namespace PaySendResponse {
  export interface UnionMember0 {
    success: true;

    redirect?: string;
  }

  export interface UnionMember1 {
    error: string;

    success: false;
  }
}

export interface PaySendParams {
  /**
   * The amount of money to send in cents.
   */
  amountCents: number;

  /**
   * The username of the SlashHandle to send money to. You can get this by asking
   * your recipient for their SlashHandle.
   */
  slashHandle: string;

  /**
   * The ID of the LegalEntity to send money from. You can get this by calling
   * `GET /legal-entity`. This field or `slashHandleId` is required unless you are
   * authenticating via API key.
   */
  legalEntityId?: string;

  /**
   * The ID of the SlashHandle to send money from. You can get this by calling
   * `GET /slash-handle`. This field or `legalEntityId` is required unless you are
   * authenticating via API key.
   */
  sourceSlashHandleId?: string;
}

export declare namespace Pay {
  export {
    type SlashHandle as SlashHandle,
    type PaySendResponse as PaySendResponse,
    type PaySendParams as PaySendParams,
  };
}
