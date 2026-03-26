const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};
export const getTheNearestLocation = (locations, point) => {
    if (locations.length === 0) return null;
    let nearest = null;
    let minDistance = Infinity;
    for (const [name, coords] of locations) {
        const distance = getDistance(point, coords);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = [name, coords];
        }
    }
    return nearest;
};