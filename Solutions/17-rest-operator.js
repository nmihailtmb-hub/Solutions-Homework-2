export const getMax = (arr) => {
    const [first, ...rest] = arr;
    if (first === undefined) return null;
    let max = first;
    for (const value of rest) {
        if (value > max) max = value;
    }
    return max;
};