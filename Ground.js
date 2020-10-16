class ground{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,700,10);
        this.width=700;
        this.height=10;
        World.add(world,this.body);
    }

    display(){
      rectMode(CENTER);
      fill("green");
      strokeWeight(4);
      stroke("black");
    }
}