export const reverse = (arr) => {
    const len = arr.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        const j = len - 1 - i;
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr; // возвращаем для цепочки, но условие говорит "не надо возвращать"
};