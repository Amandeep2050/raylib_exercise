function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function sqr(number) {
    return number ** 2;
}

function sqrt(number) {
    return number ** 0.5;
}

function distanceBetweenTwoPoints(sourceX, sourceY, targetX, targetY) {
    const horizontalDistance = sourceX - targetX;
    const verticalDistance = sourceY - targetY;
    const squaredDistance =
        sqr(horizontalDistance) + sqr(verticalDistance);
    const Distance = sqrt(squaredDistance);
    return Distance;
}

module.exports = {
    calcOffset,
    distanceBetweenTwoPoints,
};