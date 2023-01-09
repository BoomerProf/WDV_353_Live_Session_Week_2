const getTranslation = require('./translationService');

// describe, test, expect
jest.mock('./translationService');

describe('Translation Service Tests', () => {
  test('As a user I want to get a translated text from a sentence', async () => {
    const result = await getTranslation('Byte Me');
    expect(result.data.contents.text).toEqual('Byte Me');
    expect(result.data.contents.translated).toEqual(
      'Barkbark grrr! leghump growl ... Pantpant growl '
    );
    expect(result.data.contents.translation).toEqual('doge');
  });
});
