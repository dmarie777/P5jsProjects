function preload() {
    table = loadTable("colors.csv", "csv", "header");
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    background(150);
    colorMode(HSB, 360, 100, 100);
    palette = floor(random(5));
    getColor(floor(random(5)));
    stroke(h, s, b)
    rad = 40;
    blendMode(REMOVE);
    fill(h, s, b);
}


function draw() {
    const lerpFunc = (x, y, a) => x * (1 - a) + y * a;
    const prevX = pmouseX;
    const prevY = pmouseY;

    const numbCircles = max(abs(mouseX - prevX), abs(mouseY - prevY));

    for (let i = 0; i<numbCircles; i++) {
        const targetX = lerpFunc(mouseX, prevX, (1 / numbCircles) * i);
        const targetY = lerpFunc(mouseY, prevY, (1 / numbCircles) * i);
        print((1 / numbCircles) * i);
        circle(targetX, targetY, rad);
    }

}

function getColor(col1) {
    print('getcolor')
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 +2));
}