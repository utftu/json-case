import {snakeToCamel, camelToSnake} from './converters/index';

function isObject(data): data is Object {
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
  private readonly converter: Function;
  constructor(converter: Function) {
    this.converter = converter;
  }

  private async parse(data: object[] | object): Promise<object[]> {
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


        if (Array.isArray(objects[key])) {
          for (const arrayElem of objects[key]) {
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

  async convert<T>(data: T): Promise<T> {
    if (!isObject(data) && !Array.isArray(data)) {
      return data;
    }
    const objects = await this.parse((data as any) as object | object[]);
    objects.forEach((object) => this.converter(object));
    return data;
  }
}

export default JsonCase;
