const r = require("raylib");

const windowWidth = 900;
const windowHeight = 600;
const windowTitle = "Ball";
const windowFPS = 100;
const windowColor = r.WHITE;

let centerX = 10;
let centerY = 10;
const ballRadius = 10;
const ballColor = r.RED;
let xAxisFactor = 2;
let yAxisFactor = 2;

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(windowFPS);
}

function update() {
    // update
    centerX += xAxisFactor;
    centerY += yAxisFactor;

    if (centerX === windowWidth - ballRadius || centerX === 10) {
        xAxisFactor = -xAxisFactor;
    }

    if (centerY === windowHeight - ballRadius || centerY === 10) {
        yAxisFactor = -yAxisFactor;
    }
}

function draw() {
    r.BeginDrawing();

    r.ClearBackground(windowColor);

    r.DrawCircle(centerX, centerY, ballRadius, ballColor);

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        update();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
