class Bird {
  constructor(x,y, width, height, angle){
    var options = {
      'restitution': 0.8,
      'density': 1.0,
      'frictionAir': 0.005,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
    //super(x,y,w,h);
    //this.image = loadImage("sprites/bird.png");
    //this.smokeImage = loadImage("sprites/smoke.png");
    //this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
    ellipse(pos.x, pos.y, this.width, this.height);
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    pop();
    /*if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }*/
   
    
    

    /*for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }*/
  }
}
