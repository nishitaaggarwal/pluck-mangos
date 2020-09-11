class ground{
    constructor(x,y,w,h)
  {
    var options={
    isStatic:true,
    restitution:0.3,
    density :0.5
  }
  this.body= Bodies.rectangle(x ,y ,w,h,options)

  this.width=w
  this.height=h
World.add(world,this.body)
  }
  display() 
  {  push();
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,800,10)
    pop();
  }

}
