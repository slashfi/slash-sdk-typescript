// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UserinfoAPI from './userinfo';
import { UserInfo, Userinfo } from './userinfo';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Oauth2 extends APIResource {
  userinfo: UserinfoAPI.Userinfo = new UserinfoAPI.Userinfo(this._client);

  /**
   * Get or refresh an access token
   */
  getToken(body: Oauth2GetTokenParams, options?: RequestOptions): APIPromise<Oauth2GetTokenResponse> {
    return this._client.post('/oauth2/token', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface Oauth2GetTokenResponse {
  access_token: string;

  expires_in: number;

  id_token: string;

  refresh_token: string;
}

export type Oauth2GetTokenParams = Oauth2GetTokenParams.Variant0 | Oauth2GetTokenParams.Variant1;

export declare namespace Oauth2GetTokenParams {
  export interface Variant0 {
    code: string;

    grant_type: 'authorization_code';

    redirect_uri: string;

    /**
     * Unused by Slash, but required in the OAuth spec.
     */
    code_verifier?: string;

    /**
     * Unused by Slash, but required in the OAuth spec.
     */
    prompt?: string;

    /**
     * Unused by Slash, but required in the OAuth spec.
     */
    scope?: string;
  }

  export interface Variant1 {
    grant_type: 'refresh_token';

    refresh_token: string;

    /**
     * Unused by Slash, but required in the OAuth spec.
     */
    code?: string;

    /**
     * Unused by Slash, but required in the OAuth spec.
     */
    code_verifier?: string;

    /**
     * Unused by Slash, but required in the OAuth spec.
     */
    prompt?: string;

    /**
     * Unused by Slash, but required in the OAuth spec.
     */
    redirect_uri?: string;

    /**
     * Unused by Slash, but required in the OAuth spec.
     */
    scope?: string;
  }
}

Oauth2.Userinfo = Userinfo;

export declare namespace Oauth2 {
  export {
    type Oauth2GetTokenResponse as Oauth2GetTokenResponse,
    type Oauth2GetTokenParams as Oauth2GetTokenParams,
  };

  export { Userinfo as Userinfo, type UserInfo as UserInfo };
}
