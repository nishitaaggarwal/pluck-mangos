class stone{
    constructor(x,y,w,h)
  {
    var options={
   restitution:0.3,
    density :0.5
  }
  this.body= Bodies.rectangle(x ,y ,w,h,options)
  this.image=loadImage("Plucking mangoes/stone.png")
  this.width=w
  this.height=h
World.add(world,this.body)
  }
  display() 
  {  push();
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    pop();
  }

}
