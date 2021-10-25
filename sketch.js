var roomS, compSc, plantSc, plushSc, ballS, chairSc;
var title;
var hover;
var click1, plantC;
var click2, compC;
var click3, plushC;
var click4, chairC;
var click5, ballC;
var click6, back;
var click7, chairC;
var click8, ballC;
var startBut;
var bunk;
var bgm;
var mgr;
let canvas;
var ponzu1,ponzu2;
var ponzustart;
var ponzufind;


function preload() {
  title = loadImage("assets/title.png");
  startBut = loadImage("assets/startb.png");
  hover = loadSound("assets/hover.mp3");
  bgm = loadSound("assets/bgm.mp3");

  back = loadImage("assets/arrow.png");
  bunk = loadImage("assets/bed.png");
//different scenes
  roomS = loadImage("assets/roomplain.png");
  compSc = loadImage("assets/compS.png");
  plantSc = loadImage("assets/plantS.png");
  plushSc = loadImage("assets/plushS.png");
  chairSc = loadImage("assets/chairS.png");
  ballSc = loadImage("assets/ballS.png");
  chairSc = loadImage("assets/chairS.png");
//clickable buttons
  plantC = loadImage("assets/plant.png");
  compC = loadImage("assets/comp.png");
  plushC = loadImage("assets/plush.png");
  chairC = loadImage("assets/chair.png");
  ballC = loadImage("assets/ball.png");

//ponzu
  ponzustart = loadImage("assets/ponzutitle.gif");
  ponzufind = loadImage("assets/ponzuend.gif")




}


function setup() {
    canvas = createCanvas(1400,900);
    canvas.parent('sketch1');
    mgr = new SceneManager();

    mgr.addScene(start);
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
