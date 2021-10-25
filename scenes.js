
function start() {
  this.setup = function() {

}
  this.draw = function() {
    background(0,0,15);
    image(roomS,0,0,width,height);
  }

  this.mousePressed = function()
  {

  this.sceneManager.showScene(compS);
  }
}

function compS (){
  this.setup = function() {
}
  this.draw = function (){
    background(0,0,255);
    image(compS,0,0,width,height);
  }
  this.mousePressed = function()
  {

  this.sceneManager.showScene(plantS);
  }
}

function plantS (){
  this.setup = function() {
}
  this.draw = function (){
    background(0,0,255);
    image(plantS,0,0,width,height);
  }
  this.mousePressed = function()
  {

  this.sceneManager.showScene(start);
  }
}
