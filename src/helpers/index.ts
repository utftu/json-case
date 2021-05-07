export function snakeToCamelStr(str: string): string {
  return str.replace(/_([^_])/g, (_, char) => {
    return char.toUpperCase();
  });
}

export function camelToSnakeStr(str: string): string {
  return str.replace(/(\w)([A-Z])/g, (_, char, char1) => {
    return `${char}_${char1.toLowerCase()}`;
  });
}
