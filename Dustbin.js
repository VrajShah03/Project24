class dustbin{
   constructor(x,y){
  this.body=Bodies.rectangle(x,y,70,70);
  this.width=70;
  this.height=70;
  World.add(world,this.body);
   }
  display(){
   rectMode(CENTER);
   strokeWeight(4);
   stroke("pink");
   Fill("yellow");
  }
}