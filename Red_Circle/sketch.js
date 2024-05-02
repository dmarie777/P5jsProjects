function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    for(let i = 0; i < 255; i++) {
      fill(i);
      console.log(i);
      stroke('red');
      strokeWeight(1);
      circle(width/2, height/2, 255-i);     
    }
}


//maybe the loop is so fast that i cant see the changesm, even the changes in color i just see the end color