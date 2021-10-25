
function room()  {

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

function comp() {

    this.enter = function()  {

    }

    this.draw = function() {
      background(0,0,255);
      image(compSc,0,0,width,height);
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

////////////////////////////// 3 /////////////////

function plant ()  {

this.setup = function() {

  }

  this.enter = function()
  {

  }

    this.draw = function()
    {
      background(0);
      image(plantSc,0,0,width,height);
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

/////////////////////////////////////4///////////////////

function plush()  {

this.setup = function() {

  }

  this.enter = function()
  {

  }

    this.draw = function()
    {
      background(0);
      image(plushSc,0,0,width,height);
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

/////////////////////////////////////4///////////////////
