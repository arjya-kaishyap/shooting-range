var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2

  heading = createElement("h1");
  scoreoard = createElement("h1")
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
    //showLife() 

    scoreoard.html("score: "+score)
    scoreoard.style('color:red');
    scoreoard.position(width-200,20)


    push();{
    image(lifeImage, width / 2 - 130, height - gun.positionY - 400, 20, 20);
    fill("white");
    rect(width / 2 - 100, height - gun.positionY - 400, 185, 20);
    fill("#f50057");
    rect(width / 2 - 100, height - gun.positionY - 400, player.life, 20);
    noStroke();
    pop();
  }

  if(gameState===1){
    gun.y=mouseY  
    
    bulletGroup.destroy()
    bubbleGroup
    
    drawSprites();
  }
   
    function shootBullet(){
      bullet.x = mouseX
      bullet.x = mouseY
    }
   
  function handBubbleCollision(bubbleGroup){
    if(life>0) {
      score = score+1;
    }
  }
     
}

