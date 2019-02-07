'use strict';

const faker = require('faker');
const greet = require('../lib/greet');

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
