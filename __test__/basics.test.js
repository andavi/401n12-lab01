'use strict';

const faker = require('faker');
const greet = require('../lib/greet');
const arithmetic = require('../lib/arithmetic');

describe('#lib/greet.js', () => {
  test('These are the tests for the greet function', () => {

    //    ARRANGE
    const aNumber = 5;
    const aBoolean = true;
    const aName = faker.name.firstName();
    const world = 'world';

    //    ACT
    //    Andrew - no ACT for this

    //    ASSERT
    expect(greet(aNumber)).toBeNull();
    expect(greet(aBoolean)).toBeNull();
    expect(greet(aName)).toEqual(`hello ${aName}`);
    expect(greet(world)).toEqual('hello world');

  });
});

describe('#arithmetic.js', () => {
  test('These are the tests for the arithmetic module', () => {

    //    ARRANGE
    const numA = faker.random.number();
    const numB = faker.random.number();
    const numC = faker.random.number();
    const aWord = faker.lorem.word();


    //    ACT
    //    Andrew - no ACT for this

    //    ASSERT
    expect(arithmetic.add(numA, numB)).toEqual(numA + numB);
    expect(arithmetic.subtract(numA, numB)).toEqual(numA - numB);
    expect(arithmetic.multiply(numA, numB)).toEqual(numA * numB);
    expect(arithmetic.divide(numA, numB)).toEqual(numA / numB);

    expect(arithmetic.add(numA, aWord)).toBeNull();
    expect(arithmetic.subtract(aWord, numB)).toBeNull();
    expect(arithmetic.multiply(numA, aWord)).toBeNull();
    expect(arithmetic.divide(aWord, numB)).toBeNull();

    expect(arithmetic.add([numA, numB, numC])).toEqual(numA + numB + numC);
    expect(arithmetic.subtract([numA, numB, numC])).toEqual(numA - numB - numC);
    expect(arithmetic.multiply([numA, numB, numC])).toEqual(numA * numB * numC);

    expect(arithmetic.divide(numA, 0)).toBeNull();
  });
});