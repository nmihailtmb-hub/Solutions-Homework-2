const _ = require("lodash");

const getSameCount = (arr1, arr2) => {
    // удаляем дубликаты вручную (вложенные циклы)
    const unique1 = [];
    for (const item of arr1) {
        if (!unique1.includes(item)) unique1.push(item);
    }
    const unique2 = [];
    for (const item of arr2) {
        if (!unique2.includes(item)) unique2.push(item);
    }
    // подсчёт общих
    let count = 0;
    for (const item of unique1) {
        if (unique2.includes(item)) count++;
    }
    return count;
};
export default getSameCount;