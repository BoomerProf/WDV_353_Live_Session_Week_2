const getTranslation = async (sentence) => {
  console.log('Fetching Mocked Translation');
  return Promise.resolve({
    data: {
      success: { total: 1 },
      contents: {
        translated: 'Barkbark grrr! leghump growl ... Pantpant growl ',
        text: 'Byte Me',
        translation: 'doge',
      },
    },
  });
};

module.exports = getTranslation;
