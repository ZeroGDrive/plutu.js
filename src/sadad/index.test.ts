const nock = require('nock');
const Plutu = require('../../dist');

const baseUrl = 'https://api.plutus.ly/api/v1/';
const apiKey = '12345';
const accessToken = '12345';
const requestBody = {
  mobile_number: '09000000000',
  birth_year: '1999',
  amount: 100,
};
const reqheaders = {
  'X-API-KEY': apiKey,
  Authorization: `Bearer ${accessToken}`,
};

describe('Sadad Payment', () => {
  test('Verify Sadad', async () => {
    const scope = nock(baseUrl)
      .post('/transaction/sadadapi/verify', requestBody, {
        reqheaders,
      })
      .reply(200, { status: 200 });

    const PlutuClient = new Plutu({ apiKey, accessToken });
    const result = await PlutuClient.verifySadad({
      mobile_number: '09000000000',
      birth_year: '1999',
      amount: 100,
    });
    expect(result.status).toBe(200);

    scope.done();
  });
});
