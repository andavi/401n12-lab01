'use strict';

const faker = require('faker');
const greet = require('../lib/greet');

describe('#lib/greet.js', () => {
    test('These are the tests for the greet function', () => {

    //    ARRANGE
        const aNumber = 5;
        const aBoolean = true;
        const aName = faker.name.firstName();


    //    ACT
    //    Andrew - no ACT for this demo - will have plenty later\

    //    ASSERT
        expect(greet(aNumber)).toBeNull();
        expect(greet(aBoolean)).toBeNull();
        expect(greet(aName)).toEqual(`hello ${aName}`);

    });


    // test('#greet.sayHi should say Hi and ask about Khaleesi', () => {
    // //    ARRANGE - not now
    //
    // //    ACT
    //     const returnValue = greet.sayHi('Banana');
    //
    // //    ASSERT
    //     expect(returnValue).toEqual('Hello Banana. Have you met my dog Khaleesi?');
    // })
});
