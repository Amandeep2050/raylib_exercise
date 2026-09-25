const sketch = require("../02_center_rectangle_in_rectangle/sketch");

function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setup();
    loop();
    sketch.teardown();
}

main();