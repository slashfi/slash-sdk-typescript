// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SlashSDK from 'slash-sdk';

const client = new SlashSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transfer', () => {
  // Mock server tests are disabled
  test.skip('createVirtualAccountTransfer: only required params', async () => {
    const responsePromise = client.transfer.createVirtualAccountTransfer({
      amountCents: 0,
      destination: 'destination',
      source: 'source',
      'X-Idempotency-Key': 'X-Idempotency-Key',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createVirtualAccountTransfer: required and optional params', async () => {
    const response = await client.transfer.createVirtualAccountTransfer({
      amountCents: 0,
      destination: 'destination',
      source: 'source',
      'X-Idempotency-Key': 'X-Idempotency-Key',
    });
  });
});
