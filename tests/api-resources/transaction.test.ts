// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SlashSDK from 'slash-sdk';

const client = new SlashSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transaction', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transaction.retrieve('transactionId');
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
    const responsePromise = client.transaction.list();
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
      client.transaction.list(
        {
          accountId: 'accountId',
          cursor: 'cursor',
          'filter:accountId': 'filter:accountId',
          'filter:cardId': 'filter:cardId',
          'filter:detailed_status': 'pending',
          'filter:from_authorized_at': 'filter:from_authorized_at',
          'filter:from_date': 'filter:from_date',
          'filter:legalEntityId': 'filter:legalEntityId',
          'filter:providerAuthorizationId': 'filter:providerAuthorizationId',
          'filter:status': 'pending',
          'filter:to_authorized_at': 'filter:to_authorized_at',
          'filter:to_date': 'filter:to_date',
          'filter:virtualAccountId': 'filter:virtualAccountId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SlashSDK.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('aggregate', async () => {
    const responsePromise = client.transaction.aggregate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('aggregate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transaction.aggregate(
        {
          accountId: 'accountId',
          'filter:accountId': 'filter:accountId',
          'filter:cardId': 'filter:cardId',
          'filter:detailed_status': 'pending',
          'filter:from_authorized_at': 'filter:from_authorized_at',
          'filter:from_date': 'filter:from_date',
          'filter:legalEntityId': 'filter:legalEntityId',
          'filter:status': 'pending',
          'filter:to_authorized_at': 'filter:to_authorized_at',
          'filter:to_date': 'filter:to_date',
          'filter:virtualAccountId': 'filter:virtualAccountId',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SlashSDK.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveFeeDetails', async () => {
    const responsePromise = client.transaction.retrieveFeeDetails('transactionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateNote: only required params', async () => {
    const responsePromise = client.transaction.updateNote('transactionId', { note: 'note' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateNote: required and optional params', async () => {
    const response = await client.transaction.updateNote('transactionId', { note: 'note' });
  });
});
