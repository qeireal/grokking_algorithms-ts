export function binarySearch<T>(list: ReadonlyArray<T> | null, item: T): number | null {
    if (!list) {
        return null;
    }

    let [minIndex, maxIndex] = [0, list.length - 1];

    while (minIndex <= maxIndex) {
        let midIndex = Math.floor((minIndex + maxIndex) / 2);
        
        if (item === list[midIndex]) {
            return midIndex;
        }

        if (item > list[midIndex]) {
            minIndex = midIndex + 1;
        } else {
            maxIndex = midIndex - 1;
        }
    }

    return null;
}