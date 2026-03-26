const countUniqChars = (str) => {
    const chars = new Set();
    for (const ch of str) {
        chars.add(ch);
    }
    return chars.size;
};
export default countUniqChars;