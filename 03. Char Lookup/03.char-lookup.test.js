const assert = require('chai').assert; const assert = require('chai').assert;
const lookupChar = require('./03.char-lookup');

describe('Test function extract character from given index', () => {

    it('Test index extract element from string', () => {
        
        //Arrange
        let expectResult = 'l';
        //Act
        let actualResult = lookupChar('hello', 2);
        //Assert
        assert.equal(expectResult, actualResult);
    });

    it('String and index should be valid parameters', () => {
        
        assert.equal(undefined, lookupChar(5, 'hello'));
        assert.equal(undefined, lookupChar('hello', 2.5));
        assert.equal(undefined, lookupChar(5, 5));
        assert.equal(undefined, lookupChar([], undefined));
        assert.equal(undefined, lookupChar(null, {}));
        assert.equal(undefined, lookupChar(()=>{}, NaN));
        assert.equal(undefined, lookupChar(false));
    });

    it('Index should be less than or equal to the length of the string', () => {

        let expectResult = 'Incorrect index';

        let actualResult = lookupChar('hello', 6);

        assert.equal(expectResult, actualResult);
    });

    it('Index should be bigger than the length of the string', () => {

        let expectResult = 'Incorrect index';

        let actualResult = lookupChar('hello', -2);

        assert.equal(expectResult, actualResult);
    });
});