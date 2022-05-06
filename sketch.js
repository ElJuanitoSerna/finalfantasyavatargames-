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
//var radius;
//var c;
//var eraser;
//var changeBG;
//var checkbox;
var backGroundT;
var avatarTop;
var avatarMiddle;
var avatarBottom;
////var cursorImg;
var input;
var input2;
var input3;
var input4;
var input5;
var backGroundHtml;



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
  //cursorImg = loadImage("Assets/brushtwo.png")
  backGroundT = loadImage("Assets/backgroundtrans.png")
  backGroundHtml = loadImage("Assets/backgroundhtml.png")
  //myFont = loadFont ('Assets/Yatara-One-Regular.ttf');
}

function setup() {
  cnv = createCanvas(1400, 800);

  //let btn1 = text(input.value(), 160, 85)
  //btn1.position(x, y)



  input = createInput("  name")
  input2 = createInput("race")
  input3 = createInput(" age")
  input4 = createInput(" weight")
  input5 = createInput(" height")
  //createP();
  //slider = createSlider(1, 20, 10);
  //eraser = createButton("clear");
  //eraser.mousePressed(changeBG);
  //checkbox = createCheckbox('Erase', false);
  //c = color(255, 0, 0);
  //background(545);
  //colorMode(RGB)
  //createColorPicker();
  avatarTop = backGroundT;
  avatarMiddle = backGroundT;
  avatarBottom = backGroundT;


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
    state = "end";
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
  headTopRight.onPress = function() {
    avatarTop = rightTop;
  }
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
  rightMiddleFace.onPress = function() {
    avatarMiddle = rightCenter;
  }
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
  bottomRightFace.onPress = function() {
    avatarBottom = rightBottom;
  }
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

  bottomMiddleFace.onOutside = function() {
    this.color = "#FFFFFF";
    this.noTint = true;
  };
  bottomMiddleFace.onPress = function() {
    avatarBottom = centerBottom;
  }
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
  centerMiddleFace.onPress = function() {
    avatarMiddle = centerMiddle;
  }

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
  headMiddle.onPress = function() {
    avatarTop = centerTop;
  }

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
  headLeft.onPress = function() {
    avatarTop = elfHair;
  }
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
  leftMiddle.onPress = function() {
    avatarMiddle = eyePractice;
  }
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

  leftBottom.onPress = function() {
    avatarBottom = bottomLeft
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
      //cursor(cursorImg, mouseX, mouseY);
      text(input.value(), 160, 85);
      text(input2.value(), 460, 85);
      text(input3.value(), 700, 82);
      text(input4.value(), 940, 82);
      text(input5.value(), 1240, 82);

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
 background (2);


  //text('CLICK YOUR ADVENTURE AVATAR BUILDING GAME', 400, 100);
  textSize(30);
  image(fisrtTitleScreen, 80, 100, 1240, 600);
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
  image(cursorImg, mouseX, mouseY);

}

function level1MouseClicked() {
  console.log('canvas is clicked on level 1');
  state = 'title'
}

function end() {
  background(2);

image(titleScreens, 80, 100, 1240, 600);
textSize(60);
  text('REFRESH TO DESIGN AGAIN', 320, 770);
  stroke(0,64,255);
  textColor(0,64,255)
}

function endMouseClicked() {
  state = "title";
  console.log('canvas is clicked on end');
}

//function mouseClicked() {
//if (mouseX > 400) {
//c = get(mouseX, mouseY);
//checkbox.checked(false);
//} else {
//stampRectangle(c);
//}
//}

//function mouseDragged() {
//if (checkbox.checked()) {
//stroke(255);
//} else {
//stroke(c)
//}
//if (mouseX < 390) {
//strokeWeight(slider.value());
//line(mouseX, mouseY, pmouseX, pmouseY);
//}
//}

function changeBG() {
  background(255);
  //createColorPicker()
}


function gameScreen() {
  background(217, 176, 67);
  //backGroundImage.draw();
  image(woodbackgroundImg, 8, 10, 1383, 780);
  image(ageWeight, 598, 22, 780, 100);
  image(oldPaper, 600, 158, 780, 566);
  image(nameRace, 60, 20, 500, 100);
  image(oldPaper, 80, 135, 440, 560);
  image(avatarTop, 80, 130, 425, 425);
  image(avatarMiddle, 80, 150, 425, 425);
  image(avatarBottom, 80, 170, 425, 425);


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
  //image(backGroundT,200, 200,180,180)



}
