// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Userinfo extends APIResource {
  /**
   * Get userinfo
   */
  retrieve(options?: RequestOptions): APIPromise<UserInfo> {
    return this._client.get('/oauth2/userinfo', options);
  }

  /**
   * Get userinfo
   */
  submit(options?: RequestOptions): APIPromise<UserInfo> {
    return this._client.post('/oauth2/userinfo', options);
  }
}

export interface UserInfo {
  email: string;

  /**
   * The user's full name
   */
  name: string;

  /**
   * The user's ID
   */
  sub: string;

  phone_number?: string;
}

export declare namespace Userinfo {
  export { type UserInfo as UserInfo };
}
