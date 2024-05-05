function setup() {
    createCanvas(window.innerWidth, windowHeight);
}

function draw() {
    background(220);

    //Draw a rectangle 
    noStroke();
    fill(2, 64, 89);
    rect(0, 0, width, height);

    //Draw a grid diagonal lines
    for(let j=0; j<height; j+=50) {
        for(let i=0; i<width; i+=40) {
            stroke(0, i, j+50, 200);
            strokeWeight(4);

            stroke(i, i+200, j+50, 200);
            line(j, i, i, j);

        }
    }


}