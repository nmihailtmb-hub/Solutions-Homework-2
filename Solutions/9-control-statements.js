const getTotalAmount = (wallet, currency) => {
    let total = 0;
    for (const item of wallet) {
        // "usd 10" – первые три символа – валюта, остальное – число
        const cur = item.slice(0, 3);
        if (cur === currency) {
            const amount = Number(item.slice(4));
            total += amount;
        }
    }
    return total;
};
export default getTotalAmount;