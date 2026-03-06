// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SlashSDK from 'slash-sdk';

const client = new SlashSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource oauth2', () => {
  // Mock server tests are disabled
  test.skip('getToken: only required params', async () => {
    const responsePromise = client.oauth2.getToken({
      code: 'code',
      grant_type: 'authorization_code',
      redirect_uri: 'redirect_uri',
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
  test.skip('getToken: required and optional params', async () => {
    const response = await client.oauth2.getToken({
      code: 'code',
      grant_type: 'authorization_code',
      redirect_uri: 'redirect_uri',
      code_verifier: 'code_verifier',
      prompt: 'prompt',
      scope: 'scope',
    });
  });
});
