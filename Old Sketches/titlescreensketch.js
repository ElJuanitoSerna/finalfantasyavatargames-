var canvas;
var click1;
var click2;
var click3;
var woodbackgroundImg;
var titleScreen;


function preload() {

woodbackgroundImg = loadImage("woodbackground.png");
titleScreenGraphic = loadImage('fantasyavatarbuildinggame.png')

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
  titleScreen = new Clickable();
  titleScreen.image = titleScreenGraphic;
  titleScreen.cornerRadius = 40;
  titleScreen.textScaled = true;
  titleScreen.text = "";
  titleScreen.locate(80, 40);
  titleScreen.resize(1280, 720);
  titleScreen.onOutside = function () {
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
  titleScreen.draw();
 
}
