const r = require("raylib");

const windowWidth = 900;
const windowHeight = 600;
const windowTitle = "Closer Target";
const windowColor = r.WHITE;
const windowFPS = 50;

const sourceRadius = 20;
const sourceX = 200;
const sourceY = 300;
const sourceColor = r.BLUE;
const targetColor = r.RED;

const targetRadius = 20;
const x1 = 20;
const y1 = 10;
const x2 = 800;
const y2 = 50;

function squareOf(number) {
    return number ** 2;
}

function squareRootOf(number) {
    return number ** 0.5;
}

function distanceBetweenTwoPoints(sourceX, sourceY, targetX, targetY) {
    const horizontalDistance = sourceX - targetX;
    const verticalDistance = sourceY - targetY;
    const squaredDistance =
        squareOf(horizontalDistance) + squareOf(verticalDistance);
    const Distance = squareRootOf(squaredDistance);
    return Distance;
}

function compare(distance1, distance2) {
    return distance1 < distance2 ? distance1 : distance2;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(windowFPS);
}

function update() {
    // update.
}

function draw() {
    // Drawing Source and targets.
    r.DrawCircle(sourceX, sourceY, sourceRadius, sourceColor);
    r.DrawCircle(x1, y1, targetRadius, targetColor);
    r.DrawCircle(x2, y2, targetRadius, targetColor);

    // Distance Calculation
    const distance1 = distanceBetweenTwoPoints(
        sourceX,
        sourceY,
        x1,
        y1,
    );
    const distance2 = distanceBetweenTwoPoints(
        sourceX,
        sourceY,
        x2,
        y2,
    );

    const shortestDistance = compare(distance1, distance2);

    r.BeginDrawing();

    r.ClearBackground(windowColor);

    if (shortestDistance === distance1) {
        r.DrawLine(sourceX, sourceY, x1, y1, r.BLACK);
    } else {
        r.DrawLine(sourceX, sourceY, x2, y2, r.BLACK);
    }

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
