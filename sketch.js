const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

 
var plinkos = [];
var divisions = [];
var particle;


var divisionHeight=300;
var score =0;
var turn =0;
var gameState="start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,790,1400,20)
  division0 = new Divisions(0,620,10,320)
  division1 = new Divisions(80,620,10,320)
  division2 = new Divisions(160,620,10,320)
  division3 = new Divisions(240,620,10,320)
  division4 = new Divisions(320,620,10,320)
  division5 = new Divisions(400,620,10,320)
  division6 = new Divisions(480,620,10,320)
  division7 = new Divisions(560,620,10,320)
  division8 = new Divisions(640,620,10,320)
  division9 = new Divisions(720,620,10,320)
  division10 = new Divisions(800,620,10,320)


   
  


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  ground.display();
  division0.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();
  division10.display();
  textSize(20)
 text("Score : "+score,20,47);
 textSize(30)
 text("500",10,550)
 textSize(30)
 text("500",100,550)
 textSize(30)
 text("500",180,550)
 textSize(30)
 text("500",260,550)
 textSize(30)
 text("100",340,550)
 textSize(30)
 text("100",420,550)
 textSize(30)
 text("100",500,550)
 textSize(30)
 text("200",580,550)
 textSize(30)
 text("200",660,550)
 textSize(30)
 text("200",740,550)
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null)
{
   particle.display();
   if(particle.body.position.y>760)
   {
      if(particle.body.position.x<300)
      {
         score=score+500;
         particle=null
         if(turn>=5)gameState="end"
      }
   }
}
if(particle!=null)
{
   particle.display();
   if(particle.body.position.y>760)
   {
      if(particle.body.position.x>301&&particle.body.position.x<600)
      {
         score=score+100;
         particle=null
         if(turn>=5)gameState="end"
      }
   }
}
if(particle!=null)
{
   particle.display();
   if(particle.body.position.y>760)
   {
      if(particle.body.position.x>601&&particle.body.position.x<800)
      {
         score=score+200;
         particle=null
         if(turn>=5)gameState="end"
      }
   }
}
if(gameState=="end"){
   text("GAME OVER!",400,400)
}
}
function keyPressed()
{
   if(keyCode===32){
      if(gameState!=="end")
      {
         turn++;
         particle=new Particle(random(0,800),10,10,10)
      }

   }
}
