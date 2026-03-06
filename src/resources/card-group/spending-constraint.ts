// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VirtualAccountAPI from '../virtual-account';
import * as CardSpendingConstraintAPI from '../card/spending-constraint';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SpendingConstraint extends APIResource {
  /**
   * Fully replace a card group's spending constraint.
   */
  updateFull(
    cardGroupID: string,
    body: SpendingConstraintUpdateFullParams,
    options?: RequestOptions,
  ): APIPromise<CardSpendingConstraintAPI.SpendingConstraint> {
    return this._client.put(path`/card-group/${cardGroupID}/spending-constraint`, { body, ...options });
  }

  /**
   * Apply a partial update to a card group's spending constraint while preserving
   * current properties applied. Properties set to "null" will be removed from the
   * spending constraint.
   */
  updatePartial(
    cardGroupID: string,
    body: SpendingConstraintUpdatePartialParams,
    options?: RequestOptions,
  ): APIPromise<CardSpendingConstraintAPI.SpendingConstraint> {
    return this._client.patch(path`/card-group/${cardGroupID}/spending-constraint`, { body, ...options });
  }
}

export interface SpendingConstraintUpdateFullParams {
  countryRule?: SpendingConstraintUpdateFullParams.CountryRule | null;

  merchantCategoryCodeRule?: SpendingConstraintUpdateFullParams.MerchantCategoryCodeRule | null;

  merchantCategoryRule?: SpendingConstraintUpdateFullParams.MerchantCategoryRule | null;

  merchantRule?: SpendingConstraintUpdateFullParams.MerchantRule | null;

  spendingRule?: SpendingConstraintUpdateFullParams.SpendingRule | null;
}

export namespace SpendingConstraintUpdateFullParams {
  export interface CountryRule {
    /**
     * A 2 digit country code
     */
    countries: Array<string>;

    restriction: CardSpendingConstraintAPI.Restriction;
  }

  export interface MerchantCategoryCodeRule {
    merchantCategoryCodes: Array<string>;

    restriction: CardSpendingConstraintAPI.Restriction;
  }

  export interface MerchantCategoryRule {
    merchantCategories: Array<string>;

    restriction: CardSpendingConstraintAPI.Restriction;
  }

  export interface MerchantRule {
    merchants: Array<string>;

    restriction: CardSpendingConstraintAPI.Restriction;
  }

  export interface SpendingRule {
    transactionSizeLimit?: SpendingRule.TransactionSizeLimit;

    utilizationLimit?: SpendingRule.UtilizationLimit;

    utilizationLimitV2?: Array<SpendingRule.UtilizationLimitV2>;
  }

  export namespace SpendingRule {
    export interface TransactionSizeLimit {
      /**
       * Represents a monetary value
       */
      maximum?: VirtualAccountAPI.Money;

      /**
       * Represents a monetary value
       */
      minimum?: VirtualAccountAPI.Money;
    }

    export interface UtilizationLimit {
      /**
       * Represents a monetary value
       */
      limitAmount: VirtualAccountAPI.Money;

      preset: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'collective';

      /**
       * Format ISO-8601. A day that equals today or the past. This is optional.If the
       * `preset` is "daily", this value is ignored. If the `preset` is "weekly",
       * "monthly" or "yearly", then the this value is used to compute when the limit
       * should start limit.
       */
      startDate?: string;

      /**
       * IANA timezone string. Limits always reset at midnight of the timezone specified.
       * If no timezone is specified, then UTC time is used.
       */
      timezone?: string;
    }

    export interface UtilizationLimitV2 {
      /**
       * Represents a monetary value
       */
      limitAmount: VirtualAccountAPI.Money;

      preset: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'collective';

      /**
       * Format ISO-8601. A day that equals today or the past. This is optional.If the
       * `preset` is "daily", this value is ignored. If the `preset` is "weekly",
       * "monthly" or "yearly", then the this value is used to compute when the limit
       * should start limit.
       */
      startDate?: string;

      /**
       * IANA timezone string. Limits always reset at midnight of the timezone specified.
       * If no timezone is specified, then UTC time is used.
       */
      timezone?: string;
    }
  }
}

export interface SpendingConstraintUpdatePartialParams {
  countryRule?: SpendingConstraintUpdatePartialParams.CountryRule | null;

  merchantCategoryCodeRule?: SpendingConstraintUpdatePartialParams.MerchantCategoryCodeRule | null;

  merchantCategoryRule?: SpendingConstraintUpdatePartialParams.MerchantCategoryRule | null;

  merchantRule?: SpendingConstraintUpdatePartialParams.MerchantRule | null;

  spendingRule?: SpendingConstraintUpdatePartialParams.SpendingRule | null;
}

export namespace SpendingConstraintUpdatePartialParams {
  export interface CountryRule {
    /**
     * A 2 digit country code
     */
    countries?: Array<string>;

    restriction?: CardSpendingConstraintAPI.Restriction;
  }

  export interface MerchantCategoryCodeRule {
    merchantCategoryCodes?: Array<string>;

    restriction?: CardSpendingConstraintAPI.Restriction;
  }

  export interface MerchantCategoryRule {
    merchantCategories?: Array<string>;

    restriction?: CardSpendingConstraintAPI.Restriction;
  }

  export interface MerchantRule {
    merchants?: Array<string>;

    restriction?: CardSpendingConstraintAPI.Restriction;
  }

  export interface SpendingRule {
    transactionSizeLimit?: SpendingRule.TransactionSizeLimit;

    utilizationLimit?: SpendingRule.UtilizationLimit;

    utilizationLimitV2?: Array<SpendingRule.UtilizationLimitV2>;
  }

  export namespace SpendingRule {
    export interface TransactionSizeLimit {
      /**
       * Represents a monetary value
       */
      maximum?: VirtualAccountAPI.Money;

      /**
       * Represents a monetary value
       */
      minimum?: VirtualAccountAPI.Money;
    }

    export interface UtilizationLimit {
      /**
       * Represents a monetary value
       */
      limitAmount?: VirtualAccountAPI.Money;

      preset?: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'collective';

      /**
       * Format ISO-8601. A day that equals today or the past. This is optional.If the
       * `preset` is "daily", this value is ignored. If the `preset` is "weekly",
       * "monthly" or "yearly", then the this value is used to compute when the limit
       * should start limit.
       */
      startDate?: string;

      /**
       * IANA timezone string. Limits always reset at midnight of the timezone specified.
       * If no timezone is specified, then UTC time is used.
       */
      timezone?: string;
    }

    export interface UtilizationLimitV2 {
      /**
       * Represents a monetary value
       */
      limitAmount?: VirtualAccountAPI.Money;

      preset?: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'collective';

      /**
       * Format ISO-8601. A day that equals today or the past. This is optional.If the
       * `preset` is "daily", this value is ignored. If the `preset` is "weekly",
       * "monthly" or "yearly", then the this value is used to compute when the limit
       * should start limit.
       */
      startDate?: string;

      /**
       * IANA timezone string. Limits always reset at midnight of the timezone specified.
       * If no timezone is specified, then UTC time is used.
       */
      timezone?: string;
    }
  }
}

export declare namespace SpendingConstraint {
  export {
    type SpendingConstraintUpdateFullParams as SpendingConstraintUpdateFullParams,
    type SpendingConstraintUpdatePartialParams as SpendingConstraintUpdatePartialParams,
  };
}
