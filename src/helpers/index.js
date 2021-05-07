"use strict";
exports.__esModule = true;
exports.camelToSnakeStr = exports.snakeToCamelStr = void 0;
function snakeToCamelStr(str) {
    return str.replace(/_([^_])/g, function (_, char) {
        return char.toUpperCase();
    });
}
exports.snakeToCamelStr = snakeToCamelStr;
function camelToSnakeStr(str) {
    return str.replace(/(\w)([A-Z])/g, function (_, char, char1) {
        return char + "_" + char1.toLowerCase();
    });
}
exports.camelToSnakeStr = camelToSnakeStr;
