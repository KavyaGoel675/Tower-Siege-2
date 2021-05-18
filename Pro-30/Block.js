class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png");
      this.Visibility=255;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
    var angle = this.body.angle;
      if (this.body.speed<5){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop ();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
      
      }
      else{
        push ();
        World.remove(world,this.body);
        this.visiblity = this.visiblity-5
        tint(255,this.visiblity);
       
    pop()
        
      }
     
    }
}