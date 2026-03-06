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
   * Update a webhook endpoint status.
   *
   * **Status transitions:**
   *
   * - `active`: Re-enables the endpoint. Use this to:
   *   - Unpause a paused endpoint
   *   - Re-enable an endpoint that is backing-off or disabled due to delivery
   *     failures
   *   - When re-enabled, any queued notifications will be sent
   * - `paused`: Pauses the endpoint. While paused:
   *   - New notifications are queued (not lost)
   *   - No delivery attempts are made
   *   - Use `active` to resume and process queued notifications
   * - `archived`: Permanently archives the endpoint (soft delete)
   *
   * **Note:** The `backing-off` and `disabled` statuses are system-managed and
   * cannot be set directly. These occur automatically when delivery failures are
   * detected. Use `active` to re-enable.
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
   * The current status of the webhook endpoint:
   *
   * - `active`: The webhook is enabled and receiving events normally.
   * - `paused`: The webhook has been paused by the user. Events are queued and will
   *   be delivered when the endpoint is set back to `active`.
   * - `backing-off`: The system is temporarily backing off due to delivery failures.
   *   Delivery will be automatically retried at `backingOffUntil`. You can also
   *   immediately re-enable by setting status to `active` via the PATCH endpoint.
   * - `disabled`: The webhook has been automatically disabled due to repeated
   *   delivery failures. Re-enable by setting status to `active` via the PATCH
   *   endpoint.
   */
  status: 'active' | 'paused' | 'backing-off' | 'disabled';

  /**
   * The URL that will receive the webhook payload
   */
  url: string;

  archivedAt?: string;

  /**
   * When the system will automatically retry delivery (ISO 8601 timestamp). Only
   * present when status is `backing-off`.
   */
  backingOffUntil?: string;

  /**
   * When the endpoint was automatically disabled due to repeated failures (ISO 8601
   * timestamp). Only present when status is `disabled`.
   */
  disabledAt?: string;

  /**
   * When the endpoint was paused by the user (ISO 8601 timestamp)
   */
  pausedAt?: string;
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
  /**
   * The desired status for the endpoint:
   *
   * - `active`: Enable/re-enable the endpoint
   * - `paused`: Pause the endpoint (notifications are queued)
   * - `archived`: Archive the endpoint (soft delete)
   */
  status: 'active' | 'paused' | 'archived';

  /**
   * Optional reason for the status change (for audit purposes)
   */
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
