export const compareArrays = <T>(array1: ReadonlyArray<T> | null, array2: ReadonlyArray<T> | null) => 
    JSON.stringify(array1) === JSON.stringify(array2);