// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { SlashSDK } from '../client';

export abstract class APIResource {
  protected _client: SlashSDK;

  constructor(client: SlashSDK) {
    this._client = client;
  }
}
