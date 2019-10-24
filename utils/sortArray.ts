export const sortArray = <T>(array: ReadonlyArray<T>) =>
    [...array].sort((a: T, b: T) => {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    });