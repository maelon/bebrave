import A from '../src/libs/a.js';

test('A static function sum', () => {
    expect(A.sum(1, 2)).toBe(3);
});

test('A instance function minus', () => {
    const a = new A();
    expect(a.minus(5, 2)).toBe(3);
});
