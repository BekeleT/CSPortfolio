var startX=0; 
    var startY=150; 
        var endX=0; 
            varendY=150;

function setup(){
  createCanvas(400, 400);
  strokeWeight(10);
  background(255, 122, 216);
  
}

function draw(){
  var boom = (int) (Math.random()*(255-1)+1);
  stroke(boom);
 var maxX=9;
 var minX=0;
  var maxY=9;
  var minY=-9;
  //(int) ((Math.random() * (max - min)) + min);

  while(endX<400){
    endX = startX + (int)(Math.random()*(maxX-minX)+minX);
    endY = startY + (int)(Math.random()*(maxY-minY)+minY);
    line(startX, startY, endX, endY); 
    startX=endX;
    startY=endY;
   
  }
}

function mousePressed(){
  startX=0;
  startY=150;
  endX=0;
  endY=150;

}