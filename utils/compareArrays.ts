export const compareArrays = <T>(array1: ReadonlyArray<T>, array2: ReadonlyArray<T>) => 
    JSON.stringify(array1) === JSON.stringify(array2);