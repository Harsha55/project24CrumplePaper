class Paper{
    constructor(x,y,rad){

        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,rad,options);
        this.rad = rad;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.rad);
    }


}