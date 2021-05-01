class Protector{
    constructor(x,y,width,height){
        var options= {
            isStatic:true,
            density:1.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        angleMode(RADIANS)
        rotate(this.body.angle)
        translate(pos.x,pos.y)
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}