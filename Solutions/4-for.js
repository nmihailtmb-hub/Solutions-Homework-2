const addPrefix = (arr, prefix) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(`${prefix} ${arr[i]}`);
    }
    return result;
};
export default addPrefix;