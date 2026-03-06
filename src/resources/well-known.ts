// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class WellKnown extends APIResource {
  /**
   * Get OpenID Configuration
   */
  retrieveOpenidConfiguration(
    options?: RequestOptions,
  ): APIPromise<WellKnownRetrieveOpenidConfigurationResponse> {
    return this._client.get('/.well-known/openid-configuration', options);
  }
}

export interface WellKnownRetrieveOpenidConfigurationResponse {
  authorization_endpoint: string;

  response_types_supported: Array<'code' | 'token' | 'id_token token'>;

  scopes_supported: Array<
    'openid' | 'offline_access' | 'profile' | 'email' | 'address' | 'phone' | 'user.identity.view'
  >;

  token_endpoint: string;

  userinfo_endpoint: string;

  /**
   * If omitted, the default is client_secret_basic
   */
  token_endpoint_auth_methods_supported?: Array<
    'client_secret_post' | 'client_secret_basic' | 'client_secret_jwt' | 'private_key_jwt'
  >;
}

export declare namespace WellKnown {
  export { type WellKnownRetrieveOpenidConfigurationResponse as WellKnownRetrieveOpenidConfigurationResponse };
}
