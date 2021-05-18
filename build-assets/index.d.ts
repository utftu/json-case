export declare class CaseConverter {
  static converters: {
    snakeToCamel: (object: object) => void;
    camelToSnake: (object: object) => void;
  };
  private readonly converter;
  constructor(converter: Function);
  private parse;
  convert<T>(data: T): Promise<T>;
}
export default CaseConverter;
