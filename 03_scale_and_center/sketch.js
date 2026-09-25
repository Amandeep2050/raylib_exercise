const r = require("raylib");
const geometry = require("./geometry");

const windowWidth = 800;
const windowHeight = 400;
const windowTitle = "Scale and Center";
const windowFPS = 50;
const windowColor = r.BLACK;

const outerRectWidth = 400;
const outerRectHeight = 200;
const outerX = geometry.calcOffset(windowWidth, outerRectWidth);
const outerY = geometry.calcOffset(windowHeight, outerRectHeight);
const outerRectColor = r.WHITE;
const scaleFactor = 0.8;

function innerRectLength(outerLength, scaleFactor) {
    return scaleFactor * outerLength;
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
    const innerRectWidth = innerRectLength(
        outerRectWidth,
        scaleFactor,
    );
    const innerRectHeight = innerRectLength(
        outerRectHeight,
        scaleFactor,
    );
    const innerRectColor = r.RED;
    const innerX = outerX + geometry.calcOffset(outerRectWidth, innerRectWidth);
    const innerY = outerY + geometry.calcOffset(outerRectHeight, innerRectHeight);

    r.BeginDrawing();

    r.ClearBackground(windowColor);

    // Outer rectangle
    r.DrawRectangle(
        outerX,
        outerY,
        outerRectWidth,
        outerRectHeight,
        outerRectColor,
    );

    // Inner rectangle
    r.DrawRectangle(
        innerX,
        innerY,
        innerRectWidth,
        innerRectHeight,
        innerRectColor,
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