const expect = require('chai').expect;
const mathEnforcer = require('./4.math-enforcer');

describe('Test object mathEnforcer with three methods', () => {
    describe('Test method addFive that accept one parameter', () => {

        it('Method addFive should return undefined', () => {
            expect(mathEnforcer.addFive('text')).to.equal(undefined);
            expect(mathEnforcer.addFive(() => { })).to.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive([])).to.equal(undefined);
            expect(mathEnforcer.addFive({})).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
        });

        it('Method addFive should return result', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-3)).to.equal(2);
            expect(mathEnforcer.addFive(3.5)).to.equal(8.5);

        });

    });

    describe('Test method subtractTen that accept one parameter', () => {

        it('Method subtractTen should return undefined', () => {
            expect(mathEnforcer.subtractTen('text')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(() => { })).to.equal(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('')).to.equal(undefined);
        });

        it('Method subtractTen should return result', () => {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5);

        });

    });
    describe('Test method sum that accept two parameters', () => {


        it('Method sum should return undefined', () => {
            expect(mathEnforcer.sum(5, '')).to.equal(undefined);
            expect(mathEnforcer.sum('text', 10)).to.equal(undefined);
            expect(mathEnforcer.sum('text', '')).to.equal(undefined);
            expect(mathEnforcer.sum('5', '')).to.equal(undefined);

        });

        it('Method sum should return result', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(-5, 10)).to.equal(5);
            expect(mathEnforcer.sum(5, -5)).to.equal(0);
            expect(mathEnforcer.sum(5.5, -5)).to.equal(0.5);
            expect(mathEnforcer.sum(5, -5.5)).to.equal(-0.5);
        });
    })
});