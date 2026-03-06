// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SlashSDK from 'slash-sdk';

const client = new SlashSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cardGroup', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.cardGroup.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.cardGroup.create({
      name: 'name',
      spendingConstraint: {
        countryRule: { countries: ['string'], restriction: 'allowlist' },
        merchantCategoryCodeRule: { merchantCategoryCodes: ['string'], restriction: 'allowlist' },
        merchantCategoryRule: { merchantCategories: ['string'], restriction: 'allowlist' },
        merchantRule: { merchants: ['string'], restriction: 'allowlist' },
        spendingRule: {
          transactionSizeLimit: {
            maximum: { amountCents: 0 },
            minimum: { amountCents: 0 },
          },
          utilizationLimit: {
            limitAmount: { amountCents: 0 },
            preset: 'daily',
            startDate: 'startDate',
            timezone: 'timezone',
          },
          utilizationLimitV2: [
            {
              limitAmount: { amountCents: 0 },
              preset: 'daily',
              startDate: 'startDate',
              timezone: 'timezone',
            },
          ],
        },
      },
      virtualAccountId: 'virtualAccountId',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.cardGroup.retrieve('cardGroupId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.cardGroup.update('cardGroupId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.cardGroup.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.cardGroup.list(
        { cursor: 'cursor', 'filter:name': 'filter:name' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SlashSDK.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getUtilization', async () => {
    const responsePromise = client.cardGroup.getUtilization('cardGroupId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
