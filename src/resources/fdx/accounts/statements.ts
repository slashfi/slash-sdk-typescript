// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Statements extends APIResource {
  /**
   * Search for statements
   */
  list(
    accountID: string,
    query: StatementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatementListResponse> {
    return this._client.get(path`/fdx/accounts/${accountID}/statements`, { query, ...options });
  }

  /**
   * Get account statement PDF.
   */
  retrievePdf(
    statementID: string,
    params: StatementRetrievePdfParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { accountId } = params;
    return this._client.get(path`/fdx/accounts/${accountId}/statements/${statementID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface StatementListResponse {
  statements: Array<StatementListResponse.Statement>;

  page?: StatementListResponse.Page;
}

export namespace StatementListResponse {
  export interface Statement {
    /**
     * Long-term persistent identity of the account, though not an account number.
     */
    accountId: string;

    /**
     * A description of the statement.
     */
    description: string;

    /**
     * Will only contain one element, which is a link to the
     * /accounts/{accountId}/statements/{statementId} endpoint.
     */
    links: Array<Statement.Link>;

    /**
     * The date of the statement.
     */
    statementDate: string;

    /**
     * Long-term persistent identity of the statement.
     */
    statementId: string;

    status: 'pending' | 'available';
  }

  export namespace Statement {
    export interface Link {
      href: string;

      action?: 'GET';

      rel?: string;

      types?: Array<'application/pdf'>;
    }
  }

  export interface Page {
    nextOffset?: string;
  }
}

export interface StatementListParams {
  /**
   * End time for use in retrieval of statements (ISO 8601).
   */
  endTime?: string;

  /**
   * The number of items to return (default 100, max 1000)
   */
  limit?: string;

  /**
   * The ID of the last item in the previous page of results
   */
  offset?: string;

  /**
   * Start time for use in retrieval of statements (ISO 8601).
   */
  startTime?: string;
}

export interface StatementRetrievePdfParams {
  /**
   * Account ID
   */
  accountId: string;
}

export declare namespace Statements {
  export {
    type StatementListResponse as StatementListResponse,
    type StatementListParams as StatementListParams,
    type StatementRetrievePdfParams as StatementRetrievePdfParams,
  };
}
