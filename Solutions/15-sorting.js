const bubbleSort = (arr) => {
    const result = [...arr]; // не мутируем оригинал
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < result.length - 1; i++) {
            if (result[i] > result[i + 1]) {
                [result[i], result[i + 1]] = [result[i + 1], result[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return result;
};
export default bubbleSort;