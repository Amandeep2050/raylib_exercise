const r = require("raylib");

const windowWidth = 800;
const windowHeight = 400;
const windowTitle = "Center Rectangle";
const windowColor = r.BLACK;
const windowFPS = 60;

const rectangleWidth = 400;
const rectangleHeight = 200;
const rectangleColor = r.WHITE;

function Center(parentLength, childLength) {
    return (parentLength - childLength) / 2;
}

// function xPositionForCenterRectangle(parentWidth, childWidth) {
//     return (parentWidth - childWidth) / 2;
// }

// function yPositionForCenterRectangle(parentHeight, childHeight) {
//     return (parentHeight - childHeight) / 2;
// }

function setup() {
    r.InitWindow(windowWidth, windowHeight, windowTitle);
    r.SetTargetFPS(windowFPS);
}

function draw() {
    const xPositionForRectangle = Center(windowWidth, rectangleWidth);
    const yPositionForRectangle = Center(windowHeight, rectangleHeight);

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

function update() {
    //update code
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
