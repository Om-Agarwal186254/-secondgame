var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var BALL=createSprite(30,121,15,15);
BALL.shapeColor="cyan";

var WALL1=createSprite(380,100,600,10);
WALL1.shapeColor="GREEN";
var WALL2=createSprite(15,150,600,10);
WALL2.shapeColor="GREEN";
var WALL3=createSprite(380,200,600,10);
WALL3.shapeColor="GREEN";
var WALL4=createSprite(20,300,600,10);
WALL4.shapeColor="GREEN"
var WALL5=createSprite(380,340,600,10);
WALL5.shapeColor="GREEN";
var WALL6=createSprite(370,100,800,10)
WALL6.shapeColor="green";
var gameState = "serve";
var OBS1=createSprite(35,220,60,10);
OBS1.shapeColor="RED";
var OBS2=createSprite(365,260,60,10);
OBS2.shapeColor="RED";
var OBS3=createSprite(350,150,10,10);
OBS3.shapeColor="RED";
var OBS4=createSprite(340,300,10,10);
OBS4.shapeColor="RED";
var OBS5=createSprite(25,340,10,10);
OBS5.shapeColor="RED";
var OBS6=createSprite(30,200,10,10);
OBS6.shapeColor="RED";
//place info text in the center
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
var WINS = 0
var DEATHS =0
  }
   
  //display scores
  text(WINS , 170,20);
  text(DEATHS, 230,20);
var BREAK1=createSprite(240,145,5,25);
BREAK1.shapeColor="blue";
var BREAK2=createSprite(130,190,5,25);
BREAK2.shapeColor="BLUE";


OBS1.velocityX=9;
OBS2.velocityX=9;
OBS3.velocityX=5;
OBS4.velocityX=5;
OBS5.velocityX=5;
OBS6.velocityX=5;

var GOAL=createSprite(395,380,10,70);
GOAL.shapeColor="YELLOW";

var DEATHS=0;
var WINS=0;



function draw() {
background("black")

  textSize(20);
fill("white")
textFont(BOLD)
text("DEATHS: "+ DEATHS, 280,50);
fill("white");
textFont(BOLD);
text("WINS: "+ WINS, 50,50);
    if(keyDown(UP_ARROW)) {
  BALL.y=BALL.y-5
  } 
  
  if(keyDown(DOWN_ARROW)){
    BALL.y=BALL.y+5;
  }
  
  if(keyDown(LEFT_ARROW)){
   BALL.x=BALL.x-5;
    
  }
  
  if(keyDown(RIGHT_ARROW)){
    BALL.x=BALL.x+5;
  }
  if(BALL.isTouching(GOAL)){
    playSound("assets/category_male_voiceover/you_win_male.mp3");
    BALL.x=30;
    BALL.y=121;
    WINS=WINS+1;
  }
  if(BALL.isTouching(WALL1)
  ||BALL.isTouching(WALL2)
  ||BALL.isTouching(WALL3)
  ||BALL.isTouching(WALL4)
  ||BALL.isTouching(WALL5)
  ||BALL.isTouching(OBS1)
  ||BALL.isTouching(OBS2)
  ||BALL.isTouching(OBS3)
  ||BALL.isTouching(OBS4)
  ||BALL.isTouching(OBS5)
  ||BALL.isTouching(OBS6)
  ||BALL.isTouching(WALL6)){
    BALL.x=30;
    BALL.y=121;
    playSound("assets/category_explosion/8bit_explosion.mp3");
    DEATHS=DEATHS+1;
  }
  
  
  
  
  createEdgeSprites()
  BALL.bounceOff(edges);
  OBS1.bounceOff(edges);
  OBS2.bounceOff(edges);
  OBS3.bounceOff(edges);
  OBS3.bounceOff(edges);
  OBS4.bounceOff(edges);
  OBS4.bounceOff(WALL4);
  OBS3.bounceOff(WALL2);
  OBS4.bounceOff(WALL4);
  OBS5.bounceOff(edges);
  OBS5.bounceOff(WALL5);
  OBS6.bounceOff(edges);
  OBS6.bounceOff(WALL3);
  
  if (DEATHS === 10 || WINS === 10){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    WINS = 0;
    DEATHS = 0;
  }
  
  drawSprites();
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}
  

  
 




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
