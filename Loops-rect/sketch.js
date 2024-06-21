let h,s,l;

function preload() {
    table = loadTable("colors.csv", "csv", "header"); 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    color = getColor(floor(random(5)));
    fill(h,s,l)


}

function getColor(col) {
    h=int(table.get(0, col*3));
    s=int(table.get(0, col*3+1));
    l=int(table.get(0, col*3+2));
}