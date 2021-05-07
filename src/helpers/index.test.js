"use strict";
exports.__esModule = true;
var index_1 = require("./index");
describe('helpers', function () {
    describe('snakeToCamelStr', function () {
        it('single', function () {
            expect(index_1.snakeToCamelStr('a_b')).toBe('aB');
        });
        it('many', function () {
            expect(index_1.snakeToCamelStr('a_b c_d')).toBe('aB cD');
        });
    });
    describe('camelToSnakeStr', function () {
        it('single', function () {
            expect(index_1.camelToSnakeStr('aB')).toBe('a_b');
        });
        it('many', function () {
            expect(index_1.camelToSnakeStr('aB cD')).toBe('a_b c_d');
        });
    });
});
