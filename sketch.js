var earth,sun,venus,mercury,mars,jupiter;
var earthI,venusI,sunI,mercuryI,marsI,jupiterI



function setup() {
  createCanvas(900,900);

  earth = createSprite(500, 400, 40, 40);
  earth.shapeColor = "blue";
  mars = createSprite(570, 400, 30, 30);
  mars.shapeColor = "red";
  mercury = createSprite(610, 400, 30, 30);
  mercury.shapeColor = "orange";
  sun = createSprite(400, 400, 60, 60);
  sun.shapeColor = "yellow";
  venus = createSprite(340, 400, 40, 40);
  venus.shapeColor = "pink";
  jupiter = createSprite(270, 400, 50, 50);
  jupiter.shapeColor = "purple";
}

function draw() {
  background(0); 
  earth.shapeColor = "blue";
  
  mercury.x = World.mouseX,
  mercury.y = World.mouseY;

ellipse(earth.position.x,earth.position.y,30);
ellipse(mars.position.x,mars.position.y,30);
ellipse(mercury.position.x,mercury.position.y,20);
ellipse(sun.position.x,sun.position.y,40);
ellipse(venus.position.x,venus.position.y,30);
ellipse(jupiter.position.x,jupiter.position.y,30);

if(mercury.collide(sun)){
  mercury.visibilty = false;

}




}