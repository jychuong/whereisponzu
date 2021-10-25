
function intro()  {

    this.enter = function()  {
    }

this.draw = function()
    {
       background(0,0,255);
       image(roomS,0,0,width,height);
       // plantC.draw();
    }

    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

///////////////////////  2  ////////////////////////

function scene2() {

    this.enter = function()  {


    }

    this.draw = function() {
      background(0,0,255);
      image(compS,0,0,width,height);
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

////////////////////////////// 3 /////////////////

function scene3()  {

this.setup = function() {

  }

  this.enter = function()
  {

  }

    this.draw = function()
    {
      background(0);
      image(plantS,0,0,width,height);
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

/////////////////////////////////////4///////////////////
