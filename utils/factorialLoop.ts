export const factorialLoop = (value: bigint): bigint => {
    if (value === BigInt(0) || value === BigInt(1)) {
        return BigInt(1);
    }

    let result = value;

    for (let i = value - BigInt(1); i >= BigInt(1); i--) {
        result = result * i;
    }

    return result;
}