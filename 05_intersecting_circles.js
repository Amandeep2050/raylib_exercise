const r = require("raylib");

const windowWidth = 900;
const windowHeight = 600;
const windowTitle = "Intersecting Circles";
const windowFPS = 50;
const windowColor = r.WHITE;

const circle1X = 100;
const circle1Y = 100;
const circle1Radius = 50;

const circle2X = 500;
const circle2Y = 300;
const circle2Radius = 400;

function sqr(number) {
    return number ** 2;
}

function sqrt(number) {
    return number ** 0.5;
}

function distanceBetweenTwoPoints(sourceX, sourceY, targetX, targetY) {
    const horizontalDistance = sourceX - targetX;
    const verticalDistance = sourceY - targetY;
    const squaredDistance = sqr(horizontalDistance) + sqr(verticalDistance);
    return sqrt(squaredDistance);
}

function checkIntersection(
    sourceX,
    sourceY,
    sourceRadius,
    targetX,
    targetY,
    targetRadius,
) {
    const distance = distanceBetweenTwoPoints(
        sourceX,
        sourceY,
        targetX,
        targetY,
    );
    const sumOfRadius = sourceRadius + targetRadius;
    return distance <= sumOfRadius ? true : false;
}

function choseColor(
    sourceX,
    sourceY,
    sourceRadius,
    targetX,
    targetY,
    targetRadius,
) {
    return checkIntersection(
        sourceX,
        sourceY,
        sourceRadius,
        targetX,
        targetY,
        targetRadius,
    )
        ? r.RED
        : r.BLACK;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(windowFPS);
}

function update() {
    // update
}

function draw() {
    r.BeginDrawing();
    const circleColor = choseColor(
        circle1X,
        circle1Y,
        circle1Radius,
        circle2X,
        circle2Y,
        circle2Radius,
    );

    r.ClearBackground(windowColor);

    r.DrawCircle(circle1X, circle1Y, circle1Radius, circleColor);
    r.DrawCircle(circle2X, circle2Y, circle2Radius, circleColor);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
