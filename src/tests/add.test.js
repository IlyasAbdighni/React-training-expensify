const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);
});

test('Should generate greeeting from name', () => {
    const result = generateGreeting('Ilyas');
    expect(result).toBe('Hello Ilyas');
});

test('Should generate no naem.', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
})
