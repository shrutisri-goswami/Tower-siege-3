class Polygon{
    constructor(x,y,radius){
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:4
        }
        this.body = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
        
    }
    display(){
       var pos = this.body.position;
       ellipseMode(CENTER);
       ellipse(pos.x,pos.y,this.radius);
       fill("#2ee8d2");
       imageMode(CENTER);
       image(this.image,this.body.position.x, this.body.position.y,40,40);
    }

}
    