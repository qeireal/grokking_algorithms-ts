export const findIndexOfMin = <T>(array: T[]) => 
    array.reduce(
        (lowest, next, index) => next < array[lowest] ? index : lowest,
        0
    );