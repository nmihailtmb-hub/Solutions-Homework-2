const getSuperSeriesWinner = (scores) => {
    let canadaWins = 0;
    let ussrWins = 0;
    for (const [canada, ussr] of scores) {
        if (canada > ussr) canadaWins++;
        else if (ussr > canada) ussrWins++;
    }
    if (canadaWins > ussrWins) return 'canada';
    if (ussrWins > canadaWins) return 'ussr';
    return null;
};
export default getSuperSeriesWinner;