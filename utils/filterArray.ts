export const filterArray = <T>(array: ReadonlyArray<T>, valueToFilter?: T) =>
    array.filter(
        (value, index, arr) =>
        arr.indexOf(value) === index && value !== valueToFilter
    );