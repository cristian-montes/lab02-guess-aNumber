// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNums } from '../utils.js';

const test = QUnit.test;


//      COMPARESUM FUNCTION TESTING
test('test function compareNum for TOO LOW', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'TOO LOW'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNums(2, 5) ;    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test function compareNum for TOO HIGH', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'TOO HIGH'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNums(5, 2) ;    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test function compareNum for YOU WON', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'YOU WON'; 
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNums(5, 5) ;    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});





