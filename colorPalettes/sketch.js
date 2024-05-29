/* By Steve's Makerspace
Use to display HSB palettes from a csv table.  You can copy palettes over from your code, tweak the palettes, then copy them back to your code.
*/

let table;

function preload() {
    table = loadTable("colors.csv", "csv", "header");
}

function setup() {
    createCanvas(700, 2400);
    background(220);
    colorMode(HSB, 360, 100, 100, 255);
    textSize(20);
    for (r = 0; r < table.getRowCount(); r++) { 
        fill(0);
        text(r,8, r * 60 + 35);
        for (c = 0; c < table.getColumnCount()/3; c++) {
          h = int(table.get(r, c * 3));
          s = int(table.get(r, c * 3 + 1));
          b = int(table.get(r, c * 3 + 2));
          fill(h, s, b);
          rect(c * 50 + 35, r * 60 +10, 50);
        }
    }
}