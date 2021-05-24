import {camelToSnake, snakeToCamel} from './index.js';

describe('CaseConverter', () => {
  it('snake => camel', async () => {
    const result = await snakeToCamel({
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
  it('camel => snake', () => {
    const result = camelToSnake({
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
