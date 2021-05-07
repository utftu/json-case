import {camelToSnake, snakeToCamel} from './index';

describe('converters', () => {
  it('camelToSnake', () => {
    const camel = {
      aB: 'aB',
      bC: 'bC',
    };
    camelToSnake(camel);
    expect(camel).toEqual({
      a_b: 'aB',
      b_c: 'bC',
    });
  });
  it('snakeToCamel', () => {
    const snake = {
      a_b: 'a_b',
      b_c: 'b_c',
    };
    snakeToCamel(snake);
    expect(snake).toEqual({
      aB: 'a_b',
      bC: 'b_c',
    });
  });
});
