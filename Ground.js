class GroundObj {
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.height = height;
        this.width = width;
        World.add(world, this.body);

    }
    display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill("#eb3844");
       rect(0,0,this.width,this.height); 
       pop();
    }

}