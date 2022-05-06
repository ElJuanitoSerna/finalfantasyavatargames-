let roll = ['You'];

let action = ['grab a', 'throw a', 'jump over a', 'run into a', 'pick up a', 'conjure a', 'walk away from a', 'duck a', 'use a', 'swing a'];

let weapon = ['axe', 'potion bottle', 'long sword', 'warhammer', 'drink of elixir', 'crossbow', 'morning star', ' short sword', 'gaunlet', 'helmet'];

let actiont = [',  and throw it at', ', and run into', ', and hide from', ', attack', ', cast a spell at', ',and vanquish ', ',it misses ', ', it is blocked by']


let creature = ['a troll', 'a gargoyle', 'a serpant', 'a witch', 'a dark elf', 'a sorcerer', 'a fairy', 'a cave gnome', 'a barbarian', 'a fighter', 'a paladin', 'a ranger'];




let dr;
let ac;
let wp;
let aet;
let cr;
let myFont;
let wrds;
let button;
let addMoreButton;
let centerPicture;
let cnv;
//let nameInputs = [];
//let canvas;



function preload() {
  myFont = loadFont('ASSETS/Yatra_One/YatraOne-Regular.ttf');
}

function setup() {

  fill('255');
  textFont(myFont);
  textSize(25);
  cnv = createCanvas(1000, 1000);
  //cnv.parent("#canvasDiv");

  background(66, 40, 14);
  frameRate(60);
  intText();
  //button = createButton("Click to start your next Adventure")
  button = select('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
  //addMoreButton.mousePresses(buttonPressed);
  //
  for(let i =0; i <3; i++){
  //nameInputs.push(createInput());
  //nameInputs[nameInputs. length - 1}.parent("#inputFields")
}
  //let canvas = createCanvas(windowWidth *0.5, (windowWidth*0.5)*1.250);

}

function draw() {
  loadImage('ASSETS/background/Tavernbackground.jpeg', img => {
    image(img, width * 0.2, width * 0.26, width * 0.6, width * 0.4, );
  });
}


function buttonPressed() {

  dr = int(random(roll.length));
  ac = int(random(action.length));
  wp = int(random(weapon.length));
  at = int(random(actiont.length));
  cr = int(random(creature.length));

  wrds = roll[dr] + '   ' + action[ac] + ' ' + weapon[wp] + ' ' + actiont[at] + ' ' + creature[cr] + '.';


  fortText();
  console.log(wrds);

}





function intText() {
  fill(247, 255, 0);
  textAlign(CENTER);

  text('You walk out of a Tavern, click to see what happens next?', width * 0.50, height * 0.16);
}



function fortText() {
  background(66, 40, 14);
  intText();
  fill(247, 255, 0);
  textAlign(CENTER);
  text('Your next adventure begins', width * 0.5, height * 0.75);
  text(wrds, width * 0.5, height * 0.85)
}
