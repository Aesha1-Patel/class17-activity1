
function setup() 
{
  createCanvas(400, 400);

  box1= new Box (100,75,30,25,1);
  box2= new Box (200,245,20,15,4);
  box3= new Box (300,125,10,45,2);
  
}

function draw() 
{
  background(220);
  fill ("red");
  box1.show();
  box1.move();
  fill ("blue");
  box2.show();
  box2.move();
  fill ("yellow");
  box3.show();
  box3.move();
}

