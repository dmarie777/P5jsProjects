
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(220);

    const grid= 100;
    for (let i=0; i<width; i=i+grid) {
        for (let j=0; j<height; j=j+grid) {
            createStar(i,j,grid)
        }
    }
}

function createStar(x,y,grid) {
    const b = 10;
    const s= (100-(2*b))/2;
    const bs = b+s;
    const ss = 2*s;
    const ssb =2*s+b;  
    const w= grid;
    const h = grid;
    //A random number from s-7 to s-2 
    let random = Math.floor(Math.random()*(s-2));
    while (random<(s-7)) {
        random = Math.floor(Math.random()*(s-2));
    }
    //A random number from 0 to s*0.3                                                                              
    let random2 = Math.abs(Math.floor(Math.random()*(s*0.3)));
    
    let y1 = (bs)*h/100;
    let y2 = (b + random)*h/100;
    let y3 = (b+random2)*h/100;
    let y4 = y2;
    let y5 = (bs)*h/100;
    let y6 = (bs+random2)*h/100;
    let y7 = (ssb)*h/100;
    let y9 = (ssb)*h/100;
    let y8 = y6+(y9-y6)/3;
    let y10 = (bs+random2)*h/100;

    let x7 = (bs + (random2*4))*w/100;
    let x9 = (s + (random2))*w/100;

    let x1 = x9 - (random*w*0.6)/100;
    let x5 = x7 + (random*w*0.6)/100;

    let x8 = x9 + (x7-x9)/2;
    let x3 = x8;

    let x4 = x7 - (random2*w)/100;
    let x6 = x4;

    let x10 = x9 + (random2*w)/100;
    let x2 = x10;

    beginShape();
    vertex(x1+x, y1+y);
    vertex(x2+x, y2+y);
    vertex(x3+x, y3+y);
    vertex(x4+x, y4+y);
    vertex(x5+x, y5+y);
    vertex(x6+x, y6+y);
    vertex(x7+x, y7+y);
    vertex(x8+x, y8+y);
    vertex(x9+x, y9+y);
    vertex(x10+x, y10+y);
    endShape('close');
}