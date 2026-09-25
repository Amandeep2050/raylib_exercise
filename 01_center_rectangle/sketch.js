const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 800;
const windowHeight = 400;
const windowTitle = "Center Rectangle";
const windowColor = r.BLACK;
const windowFPS = 60;

const rectangleWidth = 400;
const rectangleHeight = 200;
const rectangleColor = r.WHITE;

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
    const xPositionForRectangle = geometry.calcOffset(windowWidth, rectangleWidth);
    const yPositionForRectangle = geometry.calcOffset(windowHeight, rectangleHeight);

    r.BeginDrawing();
    r.ClearBackground(windowColor);
    r.DrawRectangle(
        xPositionForRectangle,
        yPositionForRectangle,
        rectangleWidth,
        rectangleHeight,
        rectangleColor,
    );
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