import {snakeToCamelStr, camelToSnakeStr} from '../helpers/index.js';

export function createConverter(test, convertStr) {
  return function (object) {
    for (const key in object) {
      if (!object.hasOwnProperty(key)) {
        continue;
      }
      if (!test(key)) {
        continue;
      }

      const newKey = convertStr(key);
      const oldValue = object[key];
      delete object[key];
      object[newKey] = oldValue;
    }
  };
}

export const snakeToCamel = createConverter((key) => key.includes('_'), snakeToCamelStr);
export const camelToSnake = createConverter(
  (key) => key.match(/\w[A-Z]/) !== null,
  camelToSnakeStr
);
