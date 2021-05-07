import CaseConverter from './index';

describe('CaseConverter', () => {
  it('snake => camel', async () => {
    const caseConverter = new CaseConverter(
      CaseConverter.converters.snakeToCamel
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
  it('camel => snake', async () => {
    const caseConverter = new CaseConverter(
      CaseConverter.converters.camelToSnake
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
