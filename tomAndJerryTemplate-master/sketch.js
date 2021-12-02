var tom, tomImg, tomImg2;
var jerry, jerryImg, jerryImg2;
var backG, backImg

function preload() {
tomImg = loadImage("cat4.png");
jerryImg = loadImage("mouse2.png");
backImg = loadImage("garden.png");

tomImg2 = loadAnimation("cat2.png","cat2.png","cat3.png","cat3.png");
jerryImg2 = loadImage("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(100,600);
    tom.addImage("tomImg",tomImg);

    jerry = createSprite(700,600);
    jerry.addImage("jerryImg",jerryImg);
    
    backG = creatSprite(500,400);
    backG.addImage("backImg",backImg);
    backG.scale = 1;

}

function draw() {
    background(255);
    drawSprites();

    

}


function keyPressed(){

    if(keyDown("left_arrow")) {
         tom.x = tom.x -3;
         tom.addAnimation("tomImg2",tomImg2);
        }
        
    if(keyDown("right_arrow")) {
         tom.x = tom.x +3;
         tom.addAnimation("tomImg2",tomImg2);
        }

    if(keyDown("up_arrow")) {
            tom.y = tom.y -3;
            tom.addAnimation("tomImg2",tomImg2);
           }
           
    if(keyDown("down_arrow")) {
            tom.y = tom.y +3;
            tom.addAnimation("tomImg2",tomImg2);
           }

    if(keyDown("a")) {
            jerry.x = jerry.x -3;
            jerry.addImage("jerryImg2",jerryImg2);
           }
           
    if(keyDown("d")) {
            jerry.x = jerry.x +3;
            jerry.addImage("jerryImg2",jerryImg2);
           }
   
    if(keyDown("w")) {
               jerry.y = jerry.y -3;
               jerry.addImage("jerryImg2",jerryImg2);
              }
              
    if(keyDown("s")) {
               jerry.y = jerry.y +3;
               jerry.addImage("jerryImg2",jerryImg2);
              }  
        
    if(keyWentUp(a)||keyWentUp(d)||keyWentUp(w)||keyWentUp(s)){
        jerry.addImage("jerryImg",jerryImg);
    }
    if(keyWentUp(left_arrow)||keyWentUp(right_arrow)||keyWentUp(up_arrow)||keyWentUp(down_arrow)){
        tom.addImage("tomImg",tomImg);
    }
}
