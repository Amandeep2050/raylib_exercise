const r = require("raylib");
const geometry = require("./geometry");

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

function compare(distance1, distance2) {
    return distance1 < distance2 ? distance1 : distance2;
}

function connectNearestTarget(shortestDistance, distance1, distance2) {
    if (shortestDistance === distance1) {
        r.DrawLine(sourceX, sourceY, x1, y1, r.BLACK);
    } else {
        r.DrawLine(sourceX, sourceY, x2, y2, r.BLACK);
    }
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(windowFPS);
}

function update() {
    // update
}

function draw() {
    // Drawing Source and targets.
    r.DrawCircle(sourceX, sourceY, sourceRadius, sourceColor);
    r.DrawCircle(x1, y1, targetRadius, targetColor);
    r.DrawCircle(x2, y2, targetRadius, targetColor);

    // Distance Calculation
    const distance1 = geometry.distanceBetweenTwoPoints(sourceX, sourceY, x1, y1);
    const distance2 = geometry.distanceBetweenTwoPoints(sourceX, sourceY, x2, y2);

    const shortestDistance = compare(distance1, distance2);


    r.BeginDrawing();

    r.ClearBackground(windowColor);

    connectNearestTarget(shortestDistance, distance1, distance2);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};