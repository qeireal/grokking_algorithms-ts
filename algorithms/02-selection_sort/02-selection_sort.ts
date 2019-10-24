import {findIndexOfMin} from '@utils/findIndexOfMin';
  
export function selectionSort<T>(array: T[] | null): T[] | null {
    if (!array) {
        return null;
    }

    const bufferArray = [...array];
    const resultArray = [];

    for (const _ in array) {
        const indexOfMin = findIndexOfMin(bufferArray);

        resultArray.push(bufferArray.splice(indexOfMin, 1)[0]);
    }
   
    return resultArray;
}