import JsonCase from './index.js';
import expect from 'expect';

const caseConverter = new JsonCase(JsonCase.converters.snakeToCamel);
const result = await caseConverter.convert({
  array: [
    {
      a_b: 'ab',
    },
    'b_c',
  ],
});
console.log('-----', 'result', result);
// expect(result).toEqual({
//   array: [
//     {
//       aB: 'ab'
//     },
//     'b_c'
//   ]
// })
