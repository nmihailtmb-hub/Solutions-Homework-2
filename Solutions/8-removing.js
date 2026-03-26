const getSameParity = (arr) => {
    if (arr.length === 0) return [];
    const firstParity = Math.abs(arr[0] % 2); // 0 – чётное, 1 – нечётное
    const result = [];
    for (const item of arr) {
        if (Math.abs(item % 2) === firstParity) {
            result.push(item);
        }
    }
    return result;
};
export default getSameParity;