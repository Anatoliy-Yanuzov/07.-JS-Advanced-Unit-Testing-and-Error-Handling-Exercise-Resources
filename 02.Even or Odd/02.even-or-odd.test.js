const assert = require('chai').assert;
const isOddOrEven = require('../2.even-or-odd');

describe('Test string length is odd or even', () => {
    it('Тhe length of the string should be odd', () => {
        //Arrange
        let expectResult = 'odd';
        //Act
        let actualResult = isOddOrEven('odd');
        //Assert
        assert.equal(expectResult, actualResult);
    });

    it('Тhe length of the string should be even', () => {
        //Arrange
        let expectResult = 'even';
        //Act
        let actualResult = isOddOrEven('even');
        //Assert
        assert.equal(expectResult, actualResult);
    });

    it('Should fail when it is not a string', () => {
        //Arrange
        let expectResult = undefined;
        //Act
        let actualResult = isOddOrEven(1);
        //Assert
        assert.equal(expectResult, actualResult);
    });
});