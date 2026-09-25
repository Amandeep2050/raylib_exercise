const r = require("raylib");

const windowX = 0;
const windowY = 0;
const windowWidth = 800;
const windowHeight = 400;
const windowTitle = "Scale and Center";
const windowFPS = 50;
const windowColor = r.BLACK;

const outerRectWidth = 400;
const outerRectHeight = 200;
const outerX = centerChild(windowX, windowWidth, outerRectWidth);
const outerY = centerChild(windowY, windowHeight, outerRectHeight);
const outerRectColor = r.WHITE;
const scaleFactor = 0.8;

// Functions
function innerRectLength(outerLength, scaleFactor) {
    return scaleFactor * outerLength;
}

function centerChild(parentPosition, parentLength, childLength) {
    return parentPosition + (parentLength - childLength) / 2;
    // return parentLength / 2 - childLength / 2;
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(windowFPS);
}

function update() {
    //update
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
    const innerX = centerChild(
        outerX,
        outerRectWidth,
        innerRectWidth,
    );
    const innerY = centerChild(
        outerY,
        outerRectHeight,
        innerRectHeight,
    );

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
