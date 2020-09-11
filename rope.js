class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.rope = Matter.Constraint.create(options);
    
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA = null;
    }
        display(){
            if(this.rope.bodyA){
                var a=this.rope.bodyA.position
           line(a.x,a.y,this.pointB.x,this.pointB.y)  
            }
       
        }
  
}