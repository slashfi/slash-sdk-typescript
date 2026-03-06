// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LegalEntityAPI from './legal-entity';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WebhookResource extends APIResource {
  /**
   * Create a new webhook endpoint
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.post('/webhook', { body, ...options });
  }

  /**
   * Update a webhook endpoint
   */
  update(webhookID: string, body: WebhookUpdateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.patch(path`/webhook/${webhookID}`, { body, ...options });
  }

  /**
   * Get all webhooks
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    return this._client.get('/webhook', { query, ...options });
  }
}

export interface Webhook {
  id: string;

  createdAt: string;

  /**
   * The name of the webhook
   */
  name: string;

  /**
   * The URL that will receive the webhook payload
   */
  url: string;

  archivedAt?: string;
}

export interface WebhookListResponse {
  items: Array<Webhook>;

  /**
   * Response sent when requesting a list of data
   */
  metadata?: LegalEntityAPI.PaginationResponse;
}

export interface WebhookCreateParams {
  name: string;

  /**
   * The URL that will receive the webhook payload
   */
  url: string;

  /**
   * The ID of the LegalEntity to create the webhook for. You can get this by calling
   * `GET /legal-entity`. This field is required unless you are authenticating via
   * API key.
   */
  legalEntityId?: string;
}

export interface WebhookUpdateParams {
  status: 'archived';

  reason?: string;
}

export interface WebhookListParams {
  /**
   * A cursor string to fetch the next page of results
   */
  cursor?: string;

  /**
   * Pass in a legal entity ID to filter for webhooks under a specific legal entity.
   */
  'filter:legalEntityId'?: string;
}

export declare namespace WebhookResource {
  export {
    type Webhook as Webhook,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
  };
}
