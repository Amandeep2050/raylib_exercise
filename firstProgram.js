const r = require("raylib");

const FPS = 50;
const windowWidth = 800;
const windowHeight = 400;
const windowTitle = "Hello Programmers!!!";

r.InitWindow(windowWidth, windowHeight, windowTitle);

r.SetTargetFPS(FPS);

x = 10;
y = 10;
width = 100;
height = 100;
color = r.WHITE;

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(
        (windowWidth - width) / 2,
        (windowHeight - height) / 2,
        width,
        height,
        color,
    );
    r.EndDrawing();
}
