// Constructor Arithmetic is imported.
const Arithmetic = require('../arithmetic.js');

// A testing suite for Arithmetic is created.
describe('Arithmetic', () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe('modulus', () => {
    it('should take two numbers, divide them, and return the remainder', () => {
      // Arrange
      const total = 0;
      // Act
      const arithmetic = new Arithmetic();
      // Assert
      // expect(arithmetic.modulus(2, 2)).toEqual(total);
      expect(arithmetic.modulus(2, 2)).toBe(total);
    });
  });
});
