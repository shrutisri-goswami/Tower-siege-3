class Block{
    constructor(x,y,width,height){
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:0.5
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world, this.body); 

    }
    display(){
        
    if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#2ee8d2");
        rect(0,0,this.width,this.height);
        pop();
    }
    else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity -5;
        tint(255, this.Visibility);
        pop();
    }
    }
    score() {
        if(this.Visibility < 0 && this.Visibility > -105){
            score++;
        }
      }

}

    
