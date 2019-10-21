import * as fc from 'fast-check';
import { binarySearch } from './01-binary-search';

test('Property test', () => {
  fc.assert(
    fc.property(fc.array(fc.nat()), genArray => {
      const sortArray = genArray
        .filter((value, index, arr) => arr.indexOf(value) === index)
        .sort((a, b) => a - b);

      sortArray.forEach((element, index) => {
        const expectedIndex = binarySearch(sortArray, element);

        expect(expectedIndex).toEqual(index);
      });
    })
  );
});
