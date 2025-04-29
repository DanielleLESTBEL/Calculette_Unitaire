const { calculate } = require('../calculator'); // importer depuis calculator.js

test('addition', () => {
    expect(calculate('2+3')).toBe(5);
});

test('soustraction', () => {
    expect(calculate('5-2')).toBe(3);
});

test('multiplication', () => {
    expect(calculate('4*3')).toBe(12);
});

test('division', () => {
    expect(calculate('8/2')).toBe(4);
});

test('priorités opératoires', () => {
    expect(calculate('2+3*4')).toBe(14); // 2 + (3*4) = 14
});

test('parenthèses', () => {
    expect(calculate('(2+3)*4')).toBe(20); // (2+3) = 5 * 4 = 20
});

test('expression invalide', () => {
    expect(() => calculate('2+bad')).toThrow("Expression invalide");
});
