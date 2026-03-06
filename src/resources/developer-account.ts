// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DeveloperAccount extends APIResource {
  /**
   * Create a DeveloperApplication
   */
  createApplication(
    developerAccountID: string,
    body: DeveloperAccountCreateApplicationParams,
    options?: RequestOptions,
  ): APIPromise<DeveloperApplicationModel> {
    return this._client.post(path`/developer-account/${developerAccountID}/application`, {
      body,
      ...options,
    });
  }
}

export interface DeveloperApplicationData {
  /**
   * The URLs or IP addresses that the application is allowed to make token exchange
   * requests from. If the application makes a token exchange request from a URL that
   * is not in this list, the request will be blocked.
   */
  allowedOrigins: Array<string>;

  /**
   * A short description of the application that will be shown to users when they
   * authorize the application.
   */
  description: string;

  /**
   * The scopes that the application will request access to.
   */
  scopes: Array<
    | 'legal_entity.home.view'
    | 'legal_entity.view'
    | 'legal_entity.users.view'
    | 'legal_entity.users.modify'
    | 'legal_entity.users.card_groups.view'
    | 'legal_entity.users.card_groups.modify'
    | 'legal_entity.subscriptions.view'
    | 'legal_entity.subscriptions.modify'
    | 'legal_entity.accounting.view'
    | 'legal_entity.accounting.modify'
    | 'legal_entity.contacts.view'
    | 'legal_entity.contacts.modify'
    | 'legal_entity.third_party_credentials.view'
    | 'legal_entity.third_party_credentials.modify'
    | 'legal_entity.authorized_third_parties.view'
    | 'legal_entity.authorized_third_parties.modify'
    | 'legal_entity.api_key.view'
    | 'legal_entity.api_key.modify'
    | 'legal_entity.applications.view'
    | 'legal_entity.applications.modify'
    | 'legal_entity.permission_roles.view'
    | 'legal_entity.automation_rules.view'
    | 'legal_entity.automation_rules.modify'
    | 'legal_entity.developer_account.view'
    | 'legal_entity.developer_account.modify'
    | 'legal_entity.cashback.view'
    | 'legal_entity.cashback.modify'
    | 'legal_entity.webhooks.view'
    | 'legal_entity.webhooks.modify'
    | 'legal_entity.ticket_reconciliation.view'
    | 'legal_entity.analytics.view'
    | 'legal_entity.transactions.crypto_deposit.accelerate'
    | 'slash_accounts.view'
    | 'slash_accounts.home.view'
    | 'slash_accounts.cards.physical.view'
    | 'slash_accounts.cards.physical.modify'
    | 'slash_accounts.cards.virtual.view'
    | 'slash_accounts.cards.virtual.modify'
    | 'slash_accounts.incoming_transactions.view'
    | 'slash_accounts.transactions.view'
    | 'slash_accounts.transactions.ach_pull.initiate'
    | 'slash_accounts.transactions.ach_push.initiate'
    | 'slash_accounts.transactions.wire.initiate'
    | 'slash_accounts.transactions.between_accounts.initiate'
    | 'slash_accounts.transactions.rtp.initiate'
    | 'slash_accounts.balance.view'
    | 'slash_accounts.subaccounts.view'
    | 'slash_accounts.subaccounts.modify'
    | 'slash_accounts.merchant_allowlist.view'
    | 'slash_accounts.merchant_allowlist.modify'
    | 'slash_accounts.integrations.view'
    | 'slash_accounts.integrations.modify'
  >;

  type: 'service';

  /**
   * The URL of the application's logo that will be shown to users when they
   * authorize the application.
   */
  logoUrl?: string;

  /**
   * The URL of the application's privacy policy that will be shown to users when
   * they authorize the application.
   */
  privacyPolicyUrl?: string;

  /**
   * The URLs of the application's redirect URIs that will be used when the
   * application is authorized. The redirect URIs must match the ones registered
   * here, or the authorization will fail.
   */
  redirectUris?: Array<string>;

  /**
   * The URL of the application's terms of service that will be shown to users when
   * they authorize the application.
   */
  termsOfServiceUrl?: string;

  /**
   * A list of users that are allowed to test the application before it is approved
   * for production. Max 10 users.
   */
  testUserEmails?: Array<string>;
}

export interface DeveloperApplicationModel {
  id: string;

  data: DeveloperApplicationData;

  developerAccountId: string;

  name: string;

  status: 'test' | 'under_review' | 'production';

  timestamp: string;

  type: DeveloperApplicationType;

  oauthClientId?: string;

  oauthClientSecret?: string;
}

export type DeveloperApplicationType = 'service';

export interface DeveloperAccountCreateApplicationParams {
  data: DeveloperApplicationData;

  name: string;

  type: DeveloperApplicationType;
}

export declare namespace DeveloperAccount {
  export {
    type DeveloperApplicationData as DeveloperApplicationData,
    type DeveloperApplicationModel as DeveloperApplicationModel,
    type DeveloperApplicationType as DeveloperApplicationType,
    type DeveloperAccountCreateApplicationParams as DeveloperAccountCreateApplicationParams,
  };
}
