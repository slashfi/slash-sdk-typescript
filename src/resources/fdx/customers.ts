// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Customers extends APIResource {
  /**
   * Get current authenticated customer ID
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<CustomerRetrieveCurrentResponse> {
    return this._client.get('/fdx/customers/current', options);
  }
}

export interface CustomerRetrieveCurrentResponse {
  customerId: string;
}

export declare namespace Customers {
  export { type CustomerRetrieveCurrentResponse as CustomerRetrieveCurrentResponse };
}
