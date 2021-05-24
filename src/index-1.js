import {snakeToCamel, camelToSnake} from './converters/index.js';

function isObject(data) {
  if (data === null || data === undefined) {
    return false;
  }
  const prototype = Object.getPrototypeOf(data);
  return prototype === Object.prototype || prototype === null;
}

export class JsonCase {
  static converters = {
    snakeToCamel,
    camelToSnake,
  };
  converter = null;
  constructor(converter) {
    this.converter = converter;
  }

  async parse(data) {
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

  async convert(data) {
    if (!isObject(data) && !Array.isArray(data)) {
      return data;
    }
    const objects = await this.parse(data);
    objects.forEach((object) => this.converter(object));
    return data;
  }
}

export default JsonCase;