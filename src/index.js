import {snakeToCamel as snakeToCamelConverter, camelToSnake as camelToSnakeConverter} from './converters/index.js';

function isObject(data) {
  if (data === null || data === undefined) {
    return false;
  }
  const prototype = Object.getPrototypeOf(data);
  return prototype === Object.prototype || prototype === null;
}

function parse(data) {
  let objects = [];
  if (Array.isArray(data)) {
    for (const arrElem of data) {
      if (isObject(arrElem)) {
        objects.push(arrElem);
      }
    }
  } else {
    objects.push(data);
  }

  for (const object of objects) {
    for (const key in object) {
      if (!object.hasOwnProperty(key)) {
        continue;
      }

      if (Array.isArray(object[key])) {
        for (const arrayElem of object[key]) {
          if (isObject(arrayElem)) {
            objects.push(arrayElem);
          }
        }
        continue;
      }

      if (isObject(object[key])) {
        objects.push(object[key]);
      }
    }
  }

  return objects;
}

function convert(data, converter) {
  if (!isObject(data) && !Array.isArray(data)) {
    return data;
  }
  const objects = parse(data);
  objects.forEach((object) => converter(object));
  return data;
}

export const snakeToCamel = (data) => convert(data, snakeToCamelConverter)
export const camelToSnake = (data) => convert(data, camelToSnakeConverter)

export {
  convert as custom
}

export default {
  snakeToCamel,
  camelToSnake,
  custom: convert
}
