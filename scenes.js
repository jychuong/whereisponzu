
function start() {
  this.setup = function() {
    plant = new Clickable();
    plant.image = b1;
    b1.locate (100,100);

}
  this.draw = function() {
    background(0,0,255);
    image(roomS,0,0,width,height);
    plant.draw();
  }

  this.keyPressed = function() {
       // switch the scene
       this.sceneManager.showScene( compS );
   }
}

// function compS (){
//   this.setup = function() {
// }
//   this.draw = function (){
//     background(0,0,255);
//     image(compS,0,0,width,height);
//   }
//   this.mousePressed = function()
//   {
//
//   this.sceneManager.showScene(plantS);
//   }
// }
//
// function plantS (){
//   this.setup = function() {
// }
//   this.draw = function (){
//     background(0,0,255);
//     image(plantS,0,0,width,height);
//   }
//   this.mousePressed = function()
//   {
//
//   this.sceneManager.showScene(start);
//   }
// }
