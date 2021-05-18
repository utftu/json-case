import JsonCase from './index.js';

describe('CaseConverter', () => {
  it('snake => camel', async () => {
    const jsonCase = new JsonCase(JsonCase.converters.snakeToCamel);
    const result = await jsonCase.convert({
      a_b: {
        a_b: 'ab',
      },
      b_c: 'bc',
      array: [
        {
          object_key: 'ab',
        },
        'stringName',
      ],
    });
    expect(result).toEqual({
      aB: {
        aB: 'ab',
      },
      bC: 'bc',
      array: [
        {
          objectKey: 'ab',
        },
        'stringName',
      ],
    });
  });
  it('camel => snake', async () => {
    const jsonCase = new JsonCase(JsonCase.converters.camelToSnake);
    const result = await jsonCase.convert({
      aB: {
        aB: 'ab',
      },
      bC: 'bc',
      array: [
        {
          objectKey: 'ab',
        },
        'stringName',
      ],
    });
    expect(result).toEqual({
      a_b: {
        a_b: 'ab',
      },
      b_c: 'bc',
      array: [
        {
          object_key: 'ab',
        },
        'stringName',
      ],
    });
  });
});
