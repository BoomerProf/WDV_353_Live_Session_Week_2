const getCryptoPrices = async () => {
  console.log('Fetching Mocked crypto');
  return Promise.resolve({
    data: [
      {
        currency: 'BTC',
      },
      {
        currency: 'ETH',
      },
    ],
  });
};

module.exports = getCryptoPrices;
