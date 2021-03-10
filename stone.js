class Stone{
    constructor(x,y,width,height){

        var options={
           
            restitution:0.4,
            density:2,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("stone.png");
        this.width= width;
        this.height= height;

        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        
        rectMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}