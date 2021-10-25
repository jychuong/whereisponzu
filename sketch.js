
var room, compS, plantS, plushS, ballS, chairS;
var plant,b1;

function preload() {
  roomS = loadImage("assets/room.png");
  compS = loadImage("assets/compS.png");
  plantS = loadImage("assets/plantS.png");
  plushS = loadImage("assets/plushS.png");
  chairS = loadImage("assets/chairS.png");

  b1 = loadImage("assets/plant.png");
}

var mgr;

function setup(){
  createCanvas(1000,1000);
  mgr = new sceneManager();
  mgr.addScene (start);
  mgr.addScene (compS);
  mgr.addScene (plantS);

  mgr.showNextScene();


}

function draw(){
  mgr.draw();
}

function mousePressed(){
   mgr.mousePressed();
}

function keyPressed(){
    // You can optionaly handle the key press at global level...
    switch(key){
        case '1':
            mgr.showScene(start);
            break;
        case '2':
            mgr.showScene(compS);
            break;
        case '3':
            mgr.showScene(plantS);
            break;
    }
     mgr.handleEvent("keyPressed");
   }
