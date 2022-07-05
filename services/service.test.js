const getCryptoPrices = require('./service');

jest.mock('./service');
describe('Crypto Service Tests', () => {
  test('As a user I want to get crypto prices from service', async () => {
    const result = await getCryptoPrices();
    expect(result.data[0].currency).toEqual('BTC');
    expect(result.data[1].currency).toEqual('ETH');
  });
});
