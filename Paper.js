class paper{

    constructor(x,y){
      var options = {
        isStatic:false,
          'restitution':0.8,
          'friction' :0.2,
          'density':1.2
      }
      this.body=Bodies.circle(x,y,30,options);
      this.diameter=30;

      World.add(world, this.body);
    }

    display(){

     push();
     translate(pos.x,pos.y);
      rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("blue");
    Fill("red");
    circle(x,y,this.diameter);
    pop();
    }
  }
    



