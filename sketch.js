var roomS, compSc, plantSc, plushSc, ballS, chairSc;
var hover;
var click1,plantC;
var click2,compC;
var click3, plushC;
var click4, chairC;
var click5, ballC;
var mgr;
let canvas;

function preload() {

  hover = loadSound("assets/hover.mp3");

  roomS = loadImage("assets/room.png");
  compSc = loadImage("assets/compS.png");
  plantSc = loadImage("assets/plantS.png");
  plushSc = loadImage("assets/plushS.png");
  chairSc = loadImage("assets/chairS.png");
  ballSc = loadImage("assets/ballS.png");
  chairSc = loadImage("assets/chairS.png");

  plantC = loadImage("assets/plant.png");
  compC = loadImage("assets/comp.png");
  plushC = loadImage("assets/plush.png");
}


function setup() {
    canvas = createCanvas(1500,1000);
    canvas.parent('sketch1');
    mgr = new SceneManager();

    mgr.addScene (room);
    mgr.addScene (comp);
    mgr.addScene (plant);
    mgr.addScene (plush);
    mgr.addScene (ball);
    mgr.addScene (chair);
    mgr.showNextScene();

}

function draw()
{
    mgr.draw();

}

function mousePressed()
{
  mgr.mousePressed();
}

function keyPressed()
{
mgr.keyPressed();
}
