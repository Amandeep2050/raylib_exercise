const r = require("raylib");

const windowX = 0;
const windowY = 0;
const windowWidth = 800;
const windowHeight = 800;
const windowTitle = "Center rectangle in rectangle";
const windowFPS = 50;
const windowColor = r.BLACK;

const outerRectangleWidth = 400;
const outerRectagleHeight = 400;
const outerX = centerChild(windowX, windowWidth, outerRectangleWidth);
const outerY = centerChild(windowY, windowHeight, outerRectagleHeight);
const outerRectangleColor = r.WHITE;

const innerRectangleWidth = 200;
const innerRectagleHeight = 200;
const innerRectangleColor = r.RED;

function centerChild(parentPosition, parentLength, childLength) {
    return parentPosition + (parentLength - childLength) / 2;
    // return parentLength / 2 - childLength / 2;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(windowFPS);
}

function update() {
    // update
}

function draw() {
    const innerX = centerChild(
        outerX,
        outerRectangleWidth,
        innerRectangleWidth,
    );
    const innerY = centerChild(
        outerY,
        outerRectagleHeight,
        innerRectagleHeight,
    );

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
