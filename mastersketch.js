'use strict'



let state = 'title';
//let state = 'gameScreen';
//let state = 'end';

let cnv;
let firstPage;
let secondPage;
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
var avatarBuild;
var backGroundImage;
var behindAttributes
var headTopRight;
var clickNextAdventure;
var screenGrab;
var rightMiddleFace;
var bottomRightFace;
var bottomMiddleFace;
var centerMiddleFace;
var headMiddle;
var informationBanner;
var nameBanner;
var headLeft;
var leftMiddle;
var leftBottom;
var fisrtTitleScreen;
var titleScreens;
var nameRace;
var ageWeight;
var clickNext;
var rightBottom;
var rightCenter;
var rightTop;
var screenCap;


function preload() {
  firstPage = loadImage('firstg1.png');
  secondPage = loadImage('game.JPG');
  //clickImg = loadImage("Mustache practice.png");
  woodbackgroundImg = loadImage("woodbackground.png");
  oldPaper = loadImage("oldpaper.jpeg");
  animatedBackdrop = loadImage("Animatedbackdrop.png");
  avatarBody = loadImage("avatarbody.png");
  avatarBody = loadImage("avatarbody.png");
  elfHair = loadImage("Assets/Elf Head.png")
  fullPractice = loadImage("fullpracticesketch.png")
  eyePractice = loadImage("Assets/Elf Eyes.png")
  bottomLeft = loadImage("Assets/Elf Mouth.png")
  centerBottom = loadImage("Assets/Ork Mouth.png")
  centerMiddle = loadImage("Assets/Ork Eyes.png")
  centerTop = loadImage("Assets/Ork Head.png")
  fisrtTitleScreen = loadImage("fantasyavatarbuildinggame.png")
  titleScreens = loadImage("endScreenGraphic.png")
  nameRace = loadImage("Assets/nameraceb.png")
  ageWeight = loadImage("Assets/ageweightheightbanner.png")
  clickNext = loadImage("Assets/clicknextbanners.png")
  rightBottom = loadImage("Assets/Humanmouth.png")
  rightCenter = loadImage("Assets/Humaneyes.png")
  rightTop = loadImage("Assets/humanhead.png")
  screenCap = loadImage("Assets/screengrabcam.png")
}

function setup() {
  cnv = createCanvas(1400, 800);
  //image (firstPage,0,0);//cnv.mouseClicked(canvasClicked);//Create, style and resize clickables.
  click1 = new Clickable();
  click1.locate(20, 20);

  click1.onHover = function() {
    this.color = "#4396D9 ";
    this.textColor = "#FFFFFF";
    this.text = "MOVE";
  };

  click1.onOutside = function() {
    this.color = "#EEEEEE";
    this.text = "Name Species";
    this.textColor = "#000000";
  };
  //This function is ran when the clickable is pressed.
  click1.onPress = function() {
    this.stroke = "#FF0000";
  };
  //This funcion is ran when the cursor was pressed and then
  //rleased inside the clickable. If it was pressed inside and
  //then released outside this won't work.
  click1.onRelease = function() {
    this.x += 200;
  };
  // information Banner
  informationBanner = new Clickable();
  informationBanner.cornerRadius = 40;
  informationBanner.image = ageWeight;
  informationBanner.locate(598, 22);
  informationBanner.resize(780, 100);
  informationBanner.text = "";
  //informationBanner.onHover = function() {
  //informationBanner.image = woodbackgroundImg;
  //};
  informationBanner.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //NAME BANNER
  nameBanner = new Clickable();
  nameBanner.image = nameRace;
  nameBanner.cornerRadius = 40;
  nameBanner.locate(60, 20);
  nameBanner.resize(500, 100);
  nameBanner.text = "";
  // SCREEN GRAB
  screenGrab = new Clickable();
  screenGrab.image = screenCap;
  screenGrab.fitImage = true; // no stretching!
  screenGrab.imageScale = 1;
  screenGrab.text = "";
  screenGrab.locate(240, 714);
  screenGrab.resize(120, 72);
  screenGrab.onHover = function() {
    screenGrab.imageScale = 1.1;

  };
  screenGrab.onPress = function() {
    saveCanvas();
  };

  screenGrab.onOutside = function() {
    screenGrab.imageScale = 1;
  };
  clickNextAdventure = new Clickable();
  //clickNextAdventure.image = clickNext;
  clickNextAdventure.imageScale = 1;
  clickNextAdventure.text = "";
  clickNextAdventure.locate(880, 12);
  clickNextAdventure.resize(20, 20);
  clickNextAdventure.onHover = function() {
    clickNextAdventure.imageScale = 1.1;
  };
  clickNextAdventure.onOutside = function() {
    clickNextAdventure.imageScale = 1;
  };
  //character design add picture
  avatarBuild = new Clickable();
  avatarBuild.cornerRadius = 40;

  //avatarBuild.image = fullPractice;
  avatarBuild.textScaled = true;
  avatarBuild.text = "";
  avatarBuild.locate(80, 135);
  avatarBuild.resize(440, 560);
  avatarBuild.onOutside = function() {
    this.color = "#FFFFFF]]]";



  };
  //avatarBuild.onHover = function () {
  //avaterBuild.image = rightBottom;
  //}
  //avatarBuild.onPress = function() {
  //alert("Your Avatar goes here");
  //};
  //behind character attributes add wood

  backGroundImage = new Clickable();
  backGroundImage.image = woodbackgroundImg;
  backGroundImage.cornerRadius = 40;
  backGroundImage.textScaled = true;
  backGroundImage.text = "";
  backGroundImage.locate(8, 10);
  backGroundImage.resize(1383, 780);
  backGroundImage.onOutside = function() {
    this.color = "#FFFFFF";
  };

  backGroundImage.onPress = function() {
    alert("TIME TO DESIGN");
  };
  //behind character attributes
  behindAttributes = new Clickable();
  behindAttributes.cornerRadius = 40;
  behindAttributes.image = oldPaper;
  behindAttributes.textScaled = true;
  behindAttributes.text = "";
  behindAttributes.locate(600, 158);
  behindAttributes.resize(780, 566);

  behindAttributes.onOutside = function() {
    //this.color = "#FFFFFF";
  };
  //behindAttributes.onHover = function () {
  this.color = "#7D0C0C";
  //};
  behindAttributes.onPress = function() {
    alert("TIME TO DESIGN");
  };


  //top Right Head
  headTopRight = new Clickable();
  headTopRight.image = rightTop;
  headTopRight.locate(1140, 200);
  headTopRight.resize(180, 140);
  headTopRight.text = "";
  headTopRight.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headTopRight.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  // middle right
  rightMiddleFace = new Clickable();
  rightMiddleFace.image = rightCenter;
  rightMiddleFace.locate(1140, 380);
  rightMiddleFace.resize(180, 140);
  rightMiddleFace.text = "";
  rightMiddleFace.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  rightMiddleFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //bottom right
  bottomRightFace = new Clickable();
  bottomRightFace.image = rightBottom;
  bottomRightFace.cornerRadius = 10;
  bottomRightFace.locate(1140, 550);
  bottomRightFace.resize(180, 140);
  bottomRightFace.text = "";
  bottomRightFace.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };

  bottomRightFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //bottom middle
  bottomMiddleFace = new Clickable();
  bottomMiddleFace.image = centerBottom;
  bottomMiddleFace.locate(890, 550);
  bottomMiddleFace.resize(180, 140);
  bottomMiddleFace.text = "";
  //bottomMiddleFace.onHover = function() {
  //this.color = "#4CBB17  ";
  //this.noTint = false;
  //this.tint = "#FF0000";
  //};
  //bottomMiddleFace.onPress = function(){
  //avatarBuild = centerBottom;
  //};

  bottomMiddleFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //middle center
  centerMiddleFace = new Clickable();
  centerMiddleFace.image = centerMiddle;
  centerMiddleFace.locate(888, 380);
  centerMiddleFace.resize(180, 140);
  centerMiddleFace.text = "";
  centerMiddleFace.onHover = function() {
    this.color = "#4CBB17 ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  centerMiddleFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //Head middle
  headMiddle = new Clickable();
  headMiddle.image = centerTop;
  //headMiddle.cornerRadius = 10;
  headMiddle.locate(888, 200);
  headMiddle.resize(180, 140);
  headMiddle.text = "";
  headMiddle.onHover = function() {
    this.color = "#4CBB17 ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headMiddle.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  //Head left
  headLeft = new Clickable();
  //headLeft.cornerRadius = 10;
  headLeft.image = elfHair;
  headLeft.locate(640, 200);
  headLeft.resize(180, 140);
  headLeft.text = "";
  headLeft.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  headLeft.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };

  //left middle
  leftMiddle = new Clickable();
  //headLeft.cornerRadius = 10;
  leftMiddle.image = eyePractice;
  leftMiddle.locate(640, 380);
  leftMiddle.resize(180, 140);
  leftMiddle.text = "";
  leftMiddle.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  leftMiddle.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  //left middle
  leftBottom = new Clickable();
  //headLeft.cornerRadius = 10;
  leftBottom.image = bottomLeft;
  leftBottom.locate(640, 550);
  leftBottom.resize(180, 140);
  leftBottom.text = "";
  leftMiddle.onHover = function() {
    this.color = "#D1A56A ";
    this.noTint = false;
    this.tint = "#FF0000";
  };
  leftBottom.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
}


function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      gameScreen();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'end':
      end();
      cnv.mouseClicked(endMouseClicked);
      break;
    default:
      break;
  }


}

function title() {
  textSize(40);
  stroke(255);

  //text('AVATAR BUILDING GAME', 100, 100);
  textSize(30);
  image(fisrtTitleScreen, 200, 200, 1200, 600);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  secondPage.image = secondPage;
  background(50, 150, 200);
  textSize(30);
  text('GAME', 100, 100);
  avatarBuild()

}

function level1MouseClicked() {
  console.log('canvas is clicked on level 1');
  state = 'end'
}

function end() {
  background(255);
  textSize(40);
  stroke(255);
  //text('END', 100, 100);
  image(titleScreens, 200, 200, 1200, 600);

}

function endMouseClicked() {
  console.log('canvas is clicked on end');
}

function gameScreen() {
  background(217, 176, 67);
  backGroundImage.draw();
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

}
