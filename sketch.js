var roomS, compSc, plantSc, plushSc, ballS, chairSc;
var hover;
var click1,plantC;
var mgr;

function preload() {

  // snd1 = loadSound("assets/bgm.mp3");

  roomS = loadImage("assets/room.png");
  compSc = loadImage("assets/compS.png");
  plantSc = loadImage("assets/plantS.png");
  plushSc = loadImage("assets/plushS.png");
  chairSc = loadImage("assets/chairS.png");
  plushSc = loadImage("assets/plushS.png");

  plantC = loadImage("assets/plant.png");
}


function setup() {
    createCanvas(1200,668);
    mgr = new SceneManager();

    mgr.addScene (room);
    mgr.addScene (comp);
    mgr.addScene (plant);
    mgr.addScene (plush);
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
