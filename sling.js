class sling {

    constructor(bodyA,pointB){   //constructor(bird,constraintlog)
        var options={
            bodyA: bodyA,      //bird
           // bodyB:bodyB,  

           // constraintlog
            pointB:pointB,
            stiffness:0.04,
            length:10
       }
   this.pointB=pointB;
       this.sling=Constraint.create(options);  // make a constraint using bodyA,bodyB
       World.add(world,sling);

    }
    fly(){
        this.sling.bodyA=null;

    }
    display() {
if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.pointB;
       // var pointB=this.sling.pointB;

        line (pointA.x,pointA.y,pointB.x,pointB.y);

}


    }
}