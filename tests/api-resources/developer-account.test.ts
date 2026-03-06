// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SlashSDK from 'slash-sdk';

const client = new SlashSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource developerAccount', () => {
  // Mock server tests are disabled
  test.skip('createApplication: only required params', async () => {
    const responsePromise = client.developerAccount.createApplication('developerAccountId', {
      data: {
        allowedOrigins: ['string'],
        description: 'description',
        scopes: ['legal_entity.home.view'],
        type: 'service',
      },
      name: 'name',
      type: 'service',
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
  test.skip('createApplication: required and optional params', async () => {
    const response = await client.developerAccount.createApplication('developerAccountId', {
      data: {
        allowedOrigins: ['string'],
        description: 'description',
        scopes: ['legal_entity.home.view'],
        type: 'service',
        logoUrl: 'logoUrl',
        privacyPolicyUrl: 'privacyPolicyUrl',
        redirectUris: ['string'],
        termsOfServiceUrl: 'termsOfServiceUrl',
        testUserEmails: ['string'],
      },
      name: 'name',
      type: 'service',
    });
  });
});
