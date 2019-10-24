import {
    Arbitrary,
    array as fcArray,
    assert as fcAssert,
    integer as fcInteger,
    property as fcProperty,
    string as fcString
} from 'fast-check';

import {sortArray} from '@utils/sortArray';
import {compareArrays} from '@utils/compareArrays';
import {SortedValues} from '@customTypes/SortedValues';
import {selectionSort} from './02-selection_sort';

describe('Property tests', () => {
  function propertyTest(entity: Arbitrary<SortedValues>) {
        fcAssert(
            fcProperty(fcArray(entity), genArray => {
                const expectedSortedArray = sortArray(genArray);
                const sortedBySelection = selectionSort(genArray);
                
                expect(compareArrays(expectedSortedArray, sortedBySelection)).toBeTruthy();
            })
        );
    }
    test('with intergers', () => {
        propertyTest(fcInteger());
    });

    test('with strings', () => {
        propertyTest(fcString());
    });

    test('with null', () => {
        expect(selectionSort(null)).toBeNull();
    });
});
