import { camelToSnakeStr, snakeToCamelStr } from './index';
describe('helpers', () => {
    describe('snakeToCamelStr', () => {
        it('single', () => {
            expect(snakeToCamelStr('a_b')).toBe('aB');
        });
        it('many', () => {
            expect(snakeToCamelStr('a_b c_d')).toBe('aB cD');
        });
    });
    describe('camelToSnakeStr', () => {
        it('single', () => {
            expect(camelToSnakeStr('aB')).toBe('a_b');
        });
        it('many', () => {
            expect(camelToSnakeStr('aB cD')).toBe('a_b c_d');
        });
    });
});
