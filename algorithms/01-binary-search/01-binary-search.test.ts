import {
    anything as fcAnything,
    Arbitrary,
    array as fcArray,
    assert as fcAssert,
    integer as fcInteger,
    property as fcProperty,
    string as fcString
} from 'fast-check';

import {filterArray} from '@utils/filterArray';
import {sortArray} from '@utils/sortArray';
import {SortedValues} from '@customTypes/SortedValues';
import {binarySearch} from './01-binary-search';

const prepareArray = <T>(array: ReadonlyArray<T>, valueToFilter?: T) =>
    sortArray(filterArray(array, valueToFilter));

describe('Property tests', () => {
  function propertyTest(entity: Arbitrary<SortedValues>) {
        fcAssert(
            fcProperty(fcArray(entity), genArray => {
                const sortedFiltederArray = prepareArray(genArray);

                sortedFiltederArray.forEach((element, index) => {
                    const expectedIndex = binarySearch(sortedFiltederArray, element);

                    expect(expectedIndex).toEqual(index);
                });
            })
        );
    }
    test('with intergers', () => {
        propertyTest(fcInteger());
    });

    test('with strings', () => {
        propertyTest(fcString());
    });

    test('with value not from the array ', () => {
        fcAssert(
            fcProperty(fcArray(fcAnything()), fcAnything(), (array, value) => {
                const sortedFiltederArray = prepareArray(array, value);

                expect(binarySearch(sortedFiltederArray, value)).toBeNull();
            })
        );
    });

    describe('with nullish values ', () => {
        test('as array and target', () => {
            expect(binarySearch(null, null)).toBeNull();
        });

        test('as array and random target', () => {
            fcAssert(
                fcProperty(fcAnything(), value => {
                    expect(binarySearch(null, value)).toBeNull();
                })
            );
        });

        test('as target and random array ', () => {
            fcAssert(
                fcProperty(fcArray(fcAnything()), array => {
                    const sortedFiltederArray = prepareArray(array, null);

                    expect(binarySearch(sortedFiltederArray, null)).toBeNull();
                })
            );
        });
    });
});
