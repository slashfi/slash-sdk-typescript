// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DeveloperAccountAPI from './developer-account';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DeveloperApplication extends APIResource {
  /**
   * Get a DeveloperApplication
   */
  retrieve(
    developerApplicationID: string,
    options?: RequestOptions,
  ): APIPromise<DeveloperAccountAPI.DeveloperApplicationModel> {
    return this._client.get(path`/developer-application/${developerApplicationID}`, options);
  }

  /**
   * Update a DeveloperApplication
   */
  update(
    developerApplicationID: string,
    body: DeveloperApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DeveloperAccountAPI.DeveloperApplicationModel> {
    return this._client.patch(path`/developer-application/${developerApplicationID}`, { body, ...options });
  }

  /**
   * Create or regenerate a DeveloperApplication's OAuthClientSecret
   */
  createOrRegenerateSecret(
    developerApplicationID: string,
    options?: RequestOptions,
  ): APIPromise<DeveloperAccountAPI.DeveloperApplicationModel> {
    return this._client.post(path`/developer-application/${developerApplicationID}/secret`, options);
  }
}

export interface DeveloperApplicationUpdateParams {
  data?: DeveloperAccountAPI.DeveloperApplicationData;

  name?: string;
}

export declare namespace DeveloperApplication {
  export { type DeveloperApplicationUpdateParams as DeveloperApplicationUpdateParams };
}
