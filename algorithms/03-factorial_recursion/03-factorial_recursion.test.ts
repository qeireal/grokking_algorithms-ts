import {factorialLoop} from '@utils/factorialLoop';
import {assert as fcAssert, bigUint as fcBigUInt, property as fcProperty} from 'fast-check';
import {factorialRecursion} from './03-factorial_recursion';

const MAX_AVAILIBLE_INT_SIZE = BigInt(9448); // Max value to avoid call stack size exceeded error

describe('Property tests', () => {
    test('with intergers', () => {
        fcAssert(
            fcProperty(fcBigUInt(MAX_AVAILIBLE_INT_SIZE), value => {
                const expectedResult = factorialLoop(value);
                const recievedResult = factorialRecursion(value);
                
                expect(recievedResult).toEqual(expectedResult);
            })
        );
    });
});
