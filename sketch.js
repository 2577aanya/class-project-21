var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(300,300,49,68);

  a.shapeColor="grey";
  b.shapeColor="grey";
  a.debug=true;
  b.debug=true;
}

function draw() {
  background(255,255,255); 
  b.x=mouseX;
  b.y=mouseY;

  
    a.shapeColor="red";
b.shapeColor="red";
if(isTouching(a,b)){
  a.shapeColor="blue"
  b.shapeColor="blue"

    
  }
  else

  {
    a.shapeColor="red";
    b.shapeColor="red";
  }
  drawSprites();
}


function isTouching(m,n)
{
 if( n.x-m.x<n.width/2+m.width/2&&m.x-n.x<m.width/2+n.width/2&&m.y-n.y<m.height/2+n.height/2&&n.y-m.y<m.height/2+n.height/2)
  {
    return true;

}

else
{
  return false;
}
}