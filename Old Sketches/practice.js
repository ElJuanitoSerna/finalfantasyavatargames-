var canvas;
var click1;
var click2;
var click3;
var clickImg;
var woodbackgroundImg;
var oldPaper;
var animatedBackdrop;
var avatarBody;
var elfHair;
var fullPractice;
var eyePractice;
var bottomLeft;
var centerMiddle;
var centerBottom;
var centerTop;
let gameState = 'title';

function preload() {
  clickImg = loadImage("Mustache practice.png");
woodbackgroundImg = loadImage("woodbackground.png");
oldPaper = loadImage("oldpaper.jpeg");
animatedBackdrop = loadImage("Animatedbackdrop.png");
avatarBody = loadImage ("avatarbody.png");
  avatarBody = loadImage ("avatarbody.png");
  elfHair= loadImage ("hair practice.png")
  fullPractice = loadImage("fullpracticesketch.png")
  eyePractice = loadImage("eyepractice.png")
  bottomLeft = loadImage ("chinpractice.png")
  centerBottom = loadImage("orkMouth.png")
  centerMiddle = loadImage("orkEyes.png")
  centerTop = loadImage ("orkTopPony.png")

}
function setup() {
  createCanvas(1400, 800);
//frameRate(60)
  //Create, style and resize clickables.
  frameRate(60);
  click1 = new Clickable();
  click1.locate(20, 20);
  //This function is ran when the clickable is hovered but not pressed.
  click1.onHover = function () {
    this.color = "#4396D9 ";
    this.textColor = "#FFFFFF";
    this.text = "MOVE";
  };
  //This function is ran when the clickable is NOT hovered.
  click1.onOutside = function () {
    this.color = "#EEEEEE";
    this.text = "Name Species";
    this.textColor = "#000000";
  };
  //This function is ran when the clickable is pressed.
  click1.onPress = function () {
    this.stroke = "#FF0000";
  };
  //This funcion is ran when the cursor was pressed and then
  //rleased inside the clickable. If it was pressed inside and
  //then released outside this won't work.
  click1.onRelease = function () {
    this.x += 200;
  };
  //character design add picture
  avatarBuild = new Clickable();
  avatarBuild.cornerRadius = 40;
  avatarBuild. image =  fullPractice;
  avatarBuild.textScaled = true;
  avatarBuild.text = "";
  avatarBuild.locate(60, 158);
  avatarBuild.resize(500, 420);
  avatarBuild.onOutside = function () {
    this.color = "#FFFFFF]]]";
  };
  //click2.onHover = function () {
  //this.color = "#AA33AA";
  //}
  avatarBuild.onPress = function () {
    alert("Your Avatar goes here");
  };
  //behind character attributes add wood

  backgroundImage = new Clickable();
  backgroundImage.image = woodbackgroundImg;
  backgroundImage.cornerRadius = 40;
  backgroundImage.textScaled = true;
  backgroundImage.text = "";
  backgroundImage.locate(8, 10);
  backgroundImage.resize(1383, 780);
  backgroundImage.onOutside = function () {
    this.color = "#FFFFFF";
  };
  //backgroundImage.onHover = function () {
  //this.color = "2";
  //};
  backgroundImage.onPress = function () {
    alert("TIME TO DESIGN");
  };
  //behind character attributes
  behindAttributes = new Clickable();
  behindAttributes.cornerRadius = 40;
  behindAttributes.image = oldPaper;
  behindAttributes.textScaled = true;
  behindAttributes.text = "";
  behindAttributes.locate(600, 158);
  behindAttributes.resize(780, 530);

  behindAttributes.onOutside = function () {
    //this.color = "#FFFFFF";
  };
  //behindAttributes.onHover = function () {
  this.color = "#7D0C0C";
  //};
  behindAttributes.onPress = function () {
    alert("TIME TO DESIGN");
  };
  //top Right Head
  headTopRight = new Clickable();
  //click3.image = clickImg;
  headTopRight.locate(1140, 200);
  headTopRight.resize(200, 100);
  headTopRight.text = "Head Top Right";
  headTopRight.onHover = function () {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headTopRight.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //click your next adventure
  // image will stretch to fill button by default
  clickNextAdventure = new Clickable();
  //click4.image = clickImg;
  clickNextAdventure.imageScale = 1;
  clickNextAdventure.text = "Click your Next adventure the game ";
  clickNextAdventure.locate(200, 620);
  clickNextAdventure.resize(220, 100);
  clickNextAdventure.onHover = function () {
    clickNextAdventure.imageScale = 1.1;
  };
  clickNextAdventure.onOutside = function () {
    clickNextAdventure.imageScale = 1;
  };

  // SCREEN GRAB
  screenGrab = new Clickable();
  //screenGrab.image = oldCamera;
  screenGrab.fitImage = true; // no stretching!
  screenGrab.imageScale = 1;
  screenGrab.text = "SCREEN GRAB";
  screenGrab.locate(440, 38);
  screenGrab.resize(120, 80);
  screenGrab.onHover = function () {
    screenGrab.imageScale = 1.1;
  };
  screenGrab.onOutside = function () {
    screenGrab.imageScale = 1;
  };
  // right middle
  rightMiddleFace = new Clickable();
  //rightMiddleFace.image = ;
  rightMiddleFace.locate(1140, 380);
  rightMiddleFace.resize(200, 100);
  rightMiddleFace.text = "Right Middle Features";
  rightMiddleFace.onHover = function () {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  rightMiddleFace.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //bottom right
  bottomRightFace = new Clickable();
  //  bottomRightFace.image = clickImg;
  bottomRightFace.cornerRadius = 10;
  bottomRightFace.locate(1140, 550);
  bottomRightFace.resize(200, 100);
  bottomRightFace.text = "Bottom right Face";
  bottomRightFace.onHover = function () {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };

  bottomRightFace.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //bottom middle
  bottomMiddleFace = new Clickable();
  bottomMiddleFace.image = centerBottom;
  bottomMiddleFace.locate(890, 550);
  bottomMiddleFace.resize(200, 100);
  bottomMiddleFace.text = "";
  bottomMiddleFace.onHover = function () {
    this.color = "#4CBB17  ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  bottomMiddleFace.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //middle center
  centerMiddleFace = new Clickable();
  centerMiddleFace.image = centerMiddle;
  centerMiddleFace.locate(888, 380);
  centerMiddleFace.resize(200, 100);
  centerMiddleFace.text = "";
  centerMiddleFace.onHover = function () {
    this.color = "#4CBB17 ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  centerMiddleFace.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //Head middle
  headMiddle = new Clickable();
  headMiddle.image = centerTop;
  //headMiddle.cornerRadius = 10;
  headMiddle.locate(888, 200);
  headMiddle.resize(200, 100);
  headMiddle.text = "";
  headMiddle.onHover = function () {
    this.color = "#4CBB17 ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headMiddle.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  // information Banner
  informationBanner = new Clickable();
  informationBanner.cornerRadius = 40;
  informationBanner.image = oldPaper;

  informationBanner.locate(598, 22);
  informationBanner.resize(780, 100);
  informationBanner.text = "";
  informationBanner.onHover = function () {
    informationBanner.image = woodbackgroundImg;
  };
  informationBanner.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //NAME BANNER
  nameBanner = new Clickable();
  // click11.image = clickImg;
  nameBanner.cornerRadius = 40;
  nameBanner.locate(60, 44);
  nameBanner.resize(340, 80);
  nameBanner.text = "NAME SPECIES";
  nameBanner.onHover = function () {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  nameBanner.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //Head left
  headLeft = new Clickable();
  //headLeft.cornerRadius = 10;
  headLeft. image = elfHair;
  headLeft.locate(640, 200);
  headLeft.resize(200, 100);
  headLeft.text = "";
  headLeft.onHover = function () {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headLeft.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  //left middle
  leftMiddle = new Clickable();
  //headLeft.cornerRadius = 10;
  leftMiddle. image = eyePractice;
  leftMiddle.locate(640, 380);
  leftMiddle.resize(200, 100);
  leftMiddle.text = "";
  leftMiddle.onHover = function () {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  leftMiddle.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //left middle
  leftBottom = new Clickable();
  //headLeft.cornerRadius = 10;
  leftBottom. image = bottomLeft;
  leftBottom.locate(640, 550);
  leftBottom.resize(200, 100);
  leftBottom.text = "";
  leftMiddle.onHover = function () {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  leftBottom.onOutside = function () {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
}

function draw() {
  background(217, 176, 67);

  switch (gameState) {

    case 'title':
      titleScreen();
      break;
    case 'lvl1':
      gameStage1();
      break;
    case 'gameover':
      gameOver();
      break;
  }

  backgroundImage.draw();
  //click1.draw();
  avatarBuild.draw();
  behindAttributes.draw();
  headTopRight.draw();
  leftBottom.draw();
  clickNextAdventure.draw();
  screenGrab.draw();
  rightMiddleFace.draw();
  leftMiddle.draw();
  bottomRightFace.draw();
  bottomMiddleFace.draw();
  headLeft.draw();
  centerMiddleFace.draw();
  headMiddle.draw();
  informationBanner.draw();
  nameBanner.draw();


  //avatarBody.draw();
  // click15.draw();
  // click16.draw();
}
