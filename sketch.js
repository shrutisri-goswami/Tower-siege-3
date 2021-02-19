
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var slingshot;
var score = 0;

function preload(){
    getBackgroundImg();
    backgroundImg = loadImage("Screenshot (31).png");
}

function setup(){ 
    createCanvas(1200,400);
    engine=Engine.create();
    world=engine.world; 

    ground= new GroundObj(630,350,250,10);
    ground2= new GroundObj(1000,210,200,10);
    //level one
    block1 = new Block(545,330,30,40);
    block2 = new Block(575,330,30,40);
    block3 = new Block(605,330,30,40);
    block4 = new Block(635,330,30,40);
    block5 = new Block(665,325,30,40);
    block6 = new Block(695,325,30,40);
    block7 = new Block(725,325,30,40);
    //level two
    block8 = new Block(575,285,30,40);
    block9 = new Block(605,285,30,40);
    block10 = new Block(635,285,30,40); 
    block11 = new Block(665,285,30,40);
    block12 = new Block(695,285,30,40);
    //level three
    block13 = new Block(605,245,30,40);
    block14 = new Block(635,245,30,40);
    block15 = new Block(665,245,30,40);
    //level four
     block16 = new Block(635,205,30,40);
    // row one
    block17= new Block(930,190,30,40);
    block18= new Block(960,190,30,40);
    block19= new Block(990,190,30,40);
    block20= new Block(1020,185,30,40);
    block21= new Block(1050,185,30,40);
    // row two
    block22= new Block(960,145,30,40);
    block23= new Block(990,145,30,40);
    block24= new Block(1020,145,30,40);
    // row three
    block25= new Block(990,105,30,40);

    // polygon
    polygon = new Polygon(100,200,20);
    
    // slingshot
    slingshot = new Sling(polygon.body,{x:100,y:200});

}

function draw(){ 
    if(backgroundImg) {
        background(backgroundImg);
    }
    Engine.update(engine);

  text("Score : "+ score , 600, 40);
  text("Press the space bar for another chance.", 520, 60);

    ground.display();
    ground2.display();

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    block17.display();
    block17.score();
    block18.display();
    block18.score();
    block19.display();
    block19.score();
    block20.display();
    block20.score();
    block21.display();
    block21.score();
    block22.display();
    block22.score();
    block23.display();
    block23.score();
    block24.display();
    block24.score();
    block25.display();
    block25.score();

    polygon.display();

    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

 function keyPressed(){
     if(keyCode === 32){
        slingshot.attach(polygon.body);
     }
    }
    async function getBackgroundImg() {
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        if(hour>=06 && hour<=19){
            bg = "Screenshot (31).png"
        } else {
            bg = "Screenshot (32).png"
        }
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
      }
