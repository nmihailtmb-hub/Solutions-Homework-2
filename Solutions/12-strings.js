const makeCensored = (text, stopWords) => {
    const words = text.split(' ');
    const censored = words.map((word) => {
        if (stopWords.includes(word)) return '$#%!';
        return word;
    });
    return censored.join(' ');
};
export default makeCensored;