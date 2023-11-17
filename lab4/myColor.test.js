// myColor.test.js
const myColor = require('./myColor');

describe('myColor array operations', () => {
    it('should return array as comma-separated string', () => {
        expect(myColor.toString()).toBe('Red,Green,White,Black');
    });

    it('should return array as comma-separated string with default join()', () => {
        expect(myColor.join()).toBe('Red,Green,White,Black');
    });

    it('should return array as string without separators', () => {
        expect(myColor.join('')).toBe('RedGreenWhiteBlack');
    });
});