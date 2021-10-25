var roomS, compS, plantS, plushS, ballS, chairS;
var hover;
var click1,plant;

function preload() {

  // snd1 = loadSound("assets/bgm.mp3");

  roomS = loadImage("assets/room.png");
  compS = loadImage("assets/compS.png");
  plantS = loadImage("assets/plantS.png");
  plushS = loadImage("assets/plushS.png");
  chairS = loadImage("assets/chairS.png");

  plant = loadImage("assets/plant.png");
}

var mgr;

function setup() {
    createCanvas(1200,668);
     mgr = new SceneManager();

    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
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

function plantC(){
  click1 = new Clickable();
  click1.image = plant;
  click1.fitImage = true; // no stretching!
  click1.imageScale = 1;
  click1.text = "";
  click1.locate(140, 200);
  click1.resize(120, 90);
  click1.onHover = function () {
    click1.imageScale = 1.1;
}
click1.onOutside = function () {
 click1.imageScale = 1;
}
}
