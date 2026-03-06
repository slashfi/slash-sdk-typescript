// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SlashSDK from 'slash-sdk';

const client = new SlashSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource spendingConstraint', () => {
  // Mock server tests are disabled
  test.skip('updateFull', async () => {
    const responsePromise = client.cardGroup.spendingConstraint.updateFull('cardGroupId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updatePartial', async () => {
    const responsePromise = client.cardGroup.spendingConstraint.updatePartial('cardGroupId', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
