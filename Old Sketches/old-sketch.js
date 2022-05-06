function setup() {
  createCanvas(1920, 1080);
  myButton = new Clickable(); //Create button
  myButton.locate(20, 20); //Position Button
  myButton.onPress = function () {
    //When myButton is pressed
    this.color = "#FF2D00"; //Change button color
    alert("You Win Art 101!"); //Show an alert message
  };
}

function draw() {
  background(220);
  myButton.draw(); // <- Draw the 'myButton' Clickable
}
