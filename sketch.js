var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var canvas
var polygon        
var slingShot        
function preload(){        
    polygon = loadImage("polygon.png");        
        
    //frist layer        
        box1 = new block(300,275,30,40)        
    box2 = new block(330,275,30,40)        
    box3 = new block(360,275,30,40)        
    box4 = new block(390,275,30,40)        
    box5 = new block(420,275,30,40)        
    box6 = new block(450,275,30,40)        
    box7 = new block(480,275,30,40)        
    //second layer        
    box8 = new block(330,235,30,40)        
    box9 = new block(360,235,30,40)        
    box10 = new block(390,235,30,40)        
    box11 = new block(420,235,30,40)        
    box12 = new block(450,235,30,40)        
    //thirdlayer        
    box13 = new block(360,195,30,40)        
    box14 = new block(390,195,30,40)        
    box15 = new block(420,195,30,40)
    //top layer
    box16 = new block(390,155,30,40)

    polygon = Bodies.circle(50,200,20)
    world.add(world,polygon)

    slingShot = new Slingshot(this.polygon,{x:100,y:200});

   
}

function setup(){
    canvas = createCanvas(800,600)
    //frist layer
    box1 = createSprite(300,275,25,35)
    box1.shapeColor = rgb(234,15,159)
    box2 = createSprite(330,275,25,35)
    box2    .shapeColor = rgb(234,15,159)
    box3 = createSprite(360,275,25,35)
    box3.shapeColor = rgb(234,15,159)
    box4 = createSprite(390,275,25,35)
    box4.shapeColor = rgb(234,15,159)
    box5 = createSprite(420,275,25,35)
    box5.shapeColor = rgb(234,15,159)
    box6 = createSprite(450,275,25,35)
    box6.shapeColor = rgb(234,15,159)
    box7 = createSprite(480,275,25,35)
    box7.shapeColor = rgb(234,15,159)
    //second layer
    box8 = createSprite(330,235,25,35)
    box8.shapeColor = rgb(0,247,1)
    box9 = createSprite(360,235,25,35)
    box9.shapeColor = rgb(0,247,1)
    box10 = createSprite(390,235,25,35)
    box10.shapeColor = rgb(0,247,1)
    box11 = createSprite(420,235,25,35)
    box11.shapeColor = rgb(0,247,1)
    box12 = createSprite(450,235,25,35)
    box12.shapeColor = rgb(0,247,1)
    //thirdlayer
    box13 = createSprite(360,195,25,35)
    box13.shapeColor = rgb(247,247,0)
    box14 = createSprite(390,195,25,35)
    box14.shapeColor = rgb(247,247,0)
    box15 = createSprite(420,195,25,35)
    box15.shapeColor = rgb(247,247,0)
    //top layer
    box16 = createSprite(390,155,25,35)
    box16.shapeColor = rgb(237,0,0)
    

}

function draw(){
    background(rgb(0,0,0));

    imageMode(CENTER)
    image(polygon,40,40);
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}