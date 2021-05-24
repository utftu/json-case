import JsonCase from './index.js';
import expect from 'expect';

const caseConverter = new JsonCase(JsonCase.converters.snakeToCamel);
const result = await caseConverter.convert({
  id: 'ef370e11-f7f3-46c1-92f9-5af5d29f5b2f',
  name: 'Awesome things from your store',
  traditional_currency: {
    id: 'USD',
    amount: 124.23,
  },
  crypto_currency: null,
  created: '2021-05-24T16:44:40.069187',
  status: 'created',
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
