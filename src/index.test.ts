import JsonCase from './index';

describe('CaseConverter', () => {
  it('snake => camel', async () => {
    const caseConverter = new JsonCase(
      JsonCase.converters.snakeToCamel
    );
    const result = await caseConverter.convert({
      a_b: {
        a_b: 'ab',
      },
      b_c: 'bc',
    });
    expect(result).toEqual({
      aB: {
        aB: 'ab',
      },
      bC: 'bc',
    });
  });
  it.only('snake => camel: array', async () => {
    const caseConverter = new JsonCase(
      JsonCase.converters.snakeToCamel
    );
    const result = await caseConverter.convert({
      array: [
        {
          a_b: 'ab',
        },
        'b_c'
      ]
    });
    expect(result).toEqual({
      array: [
        {
          aB: 'ab'
        },
        'b_c'
      ]
    })
  });
  it('camel => snake', async () => {
    const caseConverter = new JsonCase(
      JsonCase.converters.camelToSnake
    );
    const result = await caseConverter.convert({
      aB: {
        aB: 'ab',
      },
      bC: 'bc',
    });
    expect(result).toEqual({
      a_b: {
        a_b: 'ab',
      },
      b_c: 'bc',
    });
  });
});
