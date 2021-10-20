function setup(){ myButton = new Clickable();     //Create button
myButton.locate(20, 20);        //Position Button
myButton.onPress = function(){  //When myButton is pressed
  this.color = "#AAAAFF";       //Change button color
  alert("Yay!");                //Show an alert message
}
}

function draw(){ // This is the p5.js draw function.
  //...
  myButton.draw(); // <- Draw the 'myButton' Clickable
  //...
}
