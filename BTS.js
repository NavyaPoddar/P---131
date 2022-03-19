function backbtn() {
    window.location = "home.html";
}

function preload() {
    btsimage = loadImage("BTS.jpeg");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.center();
}

function draw() {
    image(btsimage, 0, 0, 700, 500);
    stroke("blue");
    noFill();
    rect(590, 70, 100, 420);
    stroke("blue");
    fill("blue");
    text("V", 600, 60)
}