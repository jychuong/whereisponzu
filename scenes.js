
function start(){
  bgm.loop();
  this.setup = function(){
    clickS = new Clickable();
      clickS.image = startBut;
      clickS.fitImage = true;
      clickS.imageScale = 1;
      clickS.locate(65, 550);
      clickS.resize(500,500);
      clickS.onHover = function () {
        clickS.imageScale = 1.05;
        }
      clickS.onOutside = function () {
        clickS.imageScale = 1;
      }
       clickS.onRelease = function(){
         mgr.showScene(room);
         hover.play();
       }
  }

  this.draw = function()
      {
         image(title,0,0,width,height);
         clickS.draw();
         image(ponzustart,0,0,width,height);


      }
}

function room()  {
  this.setup = function(){
    click1 = new Clickable();
      click1.image = plantC;
      click1.fitImage = true;
      click1.imageScale = 1;
      click1.locate(60, 135);
      click1.resize(300,500);
      click1.onHover = function () {
        click1.imageScale = 1.05;
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
         click2.locate(680, 70);
         click2.resize(260,360);
         click2.strokeWeight = 0;
         click2.onHover = function () {
           click2.imageScale = 1.05;
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
            click3.locate(750, 250);
            click3.resize(500,380);
            click3.strokeWeight = 0;
            click3.color = "clear";
            click3.onHover = function () {
              click3.imageScale = 1.02;
              }
            click3.onOutside = function () {
              click3.imageScale = 1;
            }
             click3.onRelease = function(){
               mgr.showScene(plush);
               hover.play();
             }

             click7 = new Clickable();
               click7.image = chairC;
               click7.fitImage = true;
               click7.imageScale = 1;
               click7.locate(300, 150);
               click7.resize(427,580);
               click7.strokeWeight = 0;
               click7.onHover = function () {
                 click7.imageScale = 1.02;
                 }
               click7.onOutside = function () {
                 click7.imageScale = 1;
               }
                click7.onRelease = function(){
                  mgr.showScene(chair);
                  hover.play();
                }
                click8 = new Clickable();
                  click8.image = ballC;
                  click8.fitImage = true;
                  click8.imageScale = 1;
                  click8.text = "";
                  click8.locate(150, 610);
                  click8.resize(230,330);
                  click8.strokeWeight = 0;
                  click8.color = "clear";
                  click8.onHover = function () {
                    click8.imageScale = 1.02;
                    }
                  click8.onOutside = function () {
                    click8.imageScale = 1;
                  }
                   click8.onRelease = function(){
                     mgr.showScene(ball);
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
       image(bunk,0,0,width,height);
       click3.draw();
       click7.draw();
       click8.draw();

    }
}

///////////////////////  2  ////////////////////////

function comp() {
  this.setup = function() {
    click6 = new Clickable();
      click6.image = back;
      click6.fitImage = true;
      click6.imageScale = 1;
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

    this.draw = function() {
      image(compSc,0,0,width,height);
      click6.draw();
      image(ponzufind,800,300,600,600);
    }
}

////////////////////////////// 3 /////////////////

function plant ()  {

this.setup = function() {
  click6 = new Clickable();
    click6.image = back;
    click6.fitImage = true;
    click6.imageScale = 1;
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
      click6.locate(10, 20);
      click6.resize(100,100);
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

    this.draw = function()
    {
      image(plushSc,0,0,width,height);
      click6.draw();
    }
  }


/////////////////////////////////////4///////////////////

function ball ()  {

this.setup = function() {
  click6 = new Clickable();
    click6.image = back;
    click6.fitImage = true;
    click6.imageScale = 1;
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

    this.draw = function()
    {
      image(ballSc,0,0,width,height);
      click6.draw();
    }

}

/////////////////////////////////////5///////////////////

function chair ()  {

this.setup = function() {
  click6 = new Clickable();
    click6.image = back;
    click6.fitImage = true;
    click6.imageScale = 1;
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

    this.draw = function()
    {
      image(chairSc,0,0,width,height);
      click6.draw();
    }

}

/////////////////////////////////////6///////////////////
