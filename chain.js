class Chain{
    

   
    constructor(bodyA, bodyB,offsetX,offsetY){
       this.offsetX = offsetX
       this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:offsetY}
       
        }
        this.Chain = Constraint.create(options);
        World.add(world, this.Chain);
    }

    display(){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.Chain.bodyB.position;

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.y + this.offsetY
        strokeWeight(4);
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
    
}