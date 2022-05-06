var canvas;
var click1;
var click2;
var click3;
var woodbackgroundImg;
var titleScreenEnd;



function preload() {

woodbackgroundImg = loadImage("woodbackground.png");
titleScreenEnd = loadImage('endScreenGraphic.png')

}
function setup() {
  createCanvas(1400, 800);

  click1 = new Clickable();
  click1.locate(20, 20);

  click1.onHover = function () {
    this.color = "#4396D9 ";
    this.textColor = "#FFFFFF";
    this.text = "MOVE";
  };

  click1.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "Name Species";
    this.textColor = "#000000";
  };

  click1.onPress = function () {
    this.stroke = "#FF0000";
  };
 
  click1.onRelease = function () {
    this.x += 200;
  };
  //character design add picture
  titleScreens = new Clickable();
  titleScreens.image = titleScreenEnd;
  titleScreens.cornerRadius = 40;
  titleScreens.textScaled = true;
  titleScreens.text = "";
  titleScreens.locate(80, 40);
  titleScreens.resize(1280, 720);
  titleScreens.onOutside = function () {
    this.color = "#FFFFFF]]]";
  };
 
 
 
  tbackgroundImage = new Clickable();
  tbackgroundImage.image = woodbackgroundImg;
  tbackgroundImage.cornerRadius = 40;
  tbackgroundImage.textScaled = true;
  tbackgroundImage.text = "";
  tbackgroundImage.locate(8, 10);
  tbackgroundImage.resize(1383, 780);
  tbackgroundImage.onOutside = function () {
    this.color = "#FFFFFF";
  };
  //backgroundImage.onHover = function () {
  //this.color = "2";
  //};
  tbackgroundImage.onPress = function () {
    alert("TIME TO DESIGN");
  };
  
 
 


}

function draw() {
  background(2);
  tbackgroundImage.draw();
  titleScreens.draw();
 
}
