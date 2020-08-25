class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.ellipse(x, y, w, h, options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push(); 
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill(255);
      stroke("white");
      pop();
    }
  }