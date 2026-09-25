const r = require("raylib");
const geometry = require("./geometry");

const windowX = 0;
const windowY = 0;
const windowWidth = 800;
const windowHeight = 800;
const windowTitle = "Center rectangle in rectangle";
const windowFPS = 50;
const windowColor = r.BLACK;

const outerRectangleWidth = 400;
const outerRectagleHeight = 400;
const outerX = windowX + geometry.calcOffset(windowWidth, outerRectangleWidth);
const outerY = windowY + geometry.calcOffset(windowHeight, outerRectagleHeight);
const outerRectangleColor = r.WHITE;

const innerRectangleWidth = 200;
const innerRectagleHeight = 200;
const innerRectangleColor = r.RED;

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
    const innerX = outerX + geometry.calcOffset(outerRectangleWidth, innerRectangleWidth);
    const innerY = outerY + geometry.calcOffset(outerRectagleHeight, innerRectagleHeight);

    r.BeginDrawing();

    r.ClearBackground(windowColor);

    // outer rectangle
    r.DrawRectangle(
        outerX,
        outerY,
        outerRectangleWidth,
        outerRectagleHeight,
        outerRectangleColor,
    );

    // inner rectangle
    r.DrawRectangle(
        innerX,
        innerY,
        innerRectangleWidth,
        innerRectagleHeight,
        innerRectangleColor,
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