const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

var world;

function preload(){
    bgImage = loadImage("snow3.jpg")

}

function setup() {
  createCanvas(1000,700);
  engine = Engine.create();
	world = engine.world;

  snow1=new snow(40,20);
  snow2=new snow(40,10);
  snow3=new snow(40,0);
  snow4=new snow(40,-10);
  snow5=new snow(40,-20);
  snow6=new snow(40,-30);
  snow7=new snow(40,-40);
  snow8=new snow(40,-50);
  snow9=new snow(40,-60);
  snow10=new snow(40,-70);
  snow12=new snow(40,-80);
  snow13=new snow(40,-90);
  snow14=new snow(40,-100);
  snow15=new snow(40,-110);
  snow16=new snow(40,-120);
  snow17=new snow(40,-130);
  snow18=new snow(40,-140);
  snow19=new snow(40,-150);
  


}

function draw() {
  Engine.update(engine)
  background(bgImage); 
  if (frameCount%60===0){
    //particles.push(new Particles(random(width/2-10,width/2+10), 10,10));
  } 
  
  snow1.display()
  snow2.display()
  snow3.display()
  snow4.display()
  snow5.display()
  snow6.display() 
  snow7.display()
  snow8.display()
  snow9.display()
  snow10.display()

  snow12.display()
  snow13.display()
  snow14.display()
  snow15.display()
  snow16.display()
  snow17.display()
  snow18.display()
  snow19.display()


  //drawSprites();
}