

function room()  {
  this.setup = function(){
    click1 = new Clickable();
      click1.image = plantC;
      click1.fitImage = true;
      click1.imageScale = 1;
      click1.text = "";
      click1.textsize = 0;
      click1.locate(20, 250);
      click1.resize(400,500);
      click1.strokeWeight = 0;
      click1.onHover = function () {
        click1.imageScale = 1.1;
        }
      click1.onOutside = function () {
        click1.imageScale = 1;
      }
       click1.onRelease = function(){
         mgr.showScene(plant);
         hover.play();
       }

       click2 = new Clickable();
         click2.image = compC;
         click2.fitImage = true;
         click2.imageScale = 1;
         click2.text = "";
         click2.locate(730, 150);
         click2.resize(250,350);
         click2.strokeWeight = 0;
         click2.onHover = function () {
           click2.imageScale = 1.1;
           }
         click2.onOutside = function () {
           click2.imageScale = 1;
         }
          click2.onRelease = function(){
            mgr.showScene(comp);
            hover.play();
          }

          click3 = new Clickable();
            click3.image = plushC;
            click3.fitImage = true;
            click3.imageScale = 1;
            click3.text = "";
            click3.locate(800, 150);
            click3.resize(500,600);
            click3.strokeWeight = 0;
            click3.color = "clear";
            click3.onHover = function () {
              click3.imageScale = 1.1;
              }
            click3.onOutside = function () {
              click3.imageScale = 1;
            }
             click3.onRelease = function(){
               mgr.showScene(plush);
               hover.play();
             }
  }

    this.enter = function()  {

    }

this.draw = function()
    {

       image(roomS,0,0,width,height);
       click1.draw();
       click2.draw();
       click3.draw();
    }


}

///////////////////////  2  ////////////////////////

function comp() {
  this.setup = function() {
    click6 = new Clickable();
      click6.image = back;
      click6.fitImage = true;
      click6.imageScale = 1;
      click6.text = "";
      click6.textsize = 0;
      click6.locate(10, 20);
      click6.resize(100,100);
      click6.strokeWeight = 0;
      click6.onHover = function () {
        click6.imageScale = 1.1;
        }
      click6.onOutside = function () {
        click6.imageScale = 1;
      }
       click6.onRelease = function(){
         mgr.showScene(room);
         hover.play();
    }
  }

    this.enter = function()  {

    }

    this.draw = function() {
      image(compSc,0,0,width,height);
      click6.draw();
    }
}

////////////////////////////// 3 /////////////////

function plant ()  {

this.setup = function() {
  click6 = new Clickable();
    click6.image = back;
    click6.fitImage = true;
    click6.imageScale = 1;
    click6.text = "";
    click6.textsize = 0;
    click6.locate(10, 20);
    click6.resize(100,100);
    click6.strokeWeight = 0;
    click6.onHover = function () {
      click6.imageScale = 1.1;
      }
    click6.onOutside = function () {
      click6.imageScale = 1;
    }
     click6.onRelease = function(){
       mgr.showScene(room);
       hover.play();
  }
}

  this.enter = function()
  {

  }

    this.draw = function()
    {
      image(plantSc,0,0,width,height);
      click6.draw();
    }

}

/////////////////////////////////////4///////////////////

function plush()  {

  this.setup = function() {
    click6 = new Clickable();
      click6.image = back;
      click6.fitImage = true;
      click6.imageScale = 1;
      click6.text = "";
      click6.textsize = 0;
      click6.locate(10, 20);
      click6.resize(100,100);
      click6.strokeWeight = 0;
      click6.onHover = function () {
        click6.imageScale = 1.1;
        }
      click6.onOutside = function () {
        click6.imageScale = 1;
      }
       click6.onRelease = function(){
         mgr.showScene(room);
         hover.play();
    }
  }

  this.enter = function()
  {

  }

    this.draw = function()
    {
      image(plushSc,0,0,width,height);
      click6.draw();
    }
  }


/////////////////////////////////////4///////////////////

function ball ()  {

this.setup = function() {

  }

  this.enter = function()
  {

  }

    this.draw = function()
    {

      image(ballSc,0,0,width,height);
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

/////////////////////////////////////5///////////////////

function chair ()  {

this.setup = function() {

  }

  this.enter = function()
  {

  }

    this.draw = function()
    {

      image(chairSc,0,0,width,height);
    }
    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}

/////////////////////////////////////6///////////////////
