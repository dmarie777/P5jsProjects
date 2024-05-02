function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    for (let posX = 0; posX < 255; posX++ ) {
        for(let posY = 0; posY < 255; posY++) {
            circle(posX * 75 + 50, posY * 75 + 50, 50);
        }
    }
}