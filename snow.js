class snow {
    constructor(x, y) {
        var options = {
			restitution:0.1
		
            
        }
        this.r = 30;
        this.x = random(5,750)
        this.y = random(-20,0)
		this.image=loadImage("snow4.webp");
        this.body = Bodies.circle(x, y, this.r, options);
        
        
        World.add(world, this.body);
    }
    display() {
		var snowpos=this.body.position;		
		push()
		translate(snowpos.x, snowpos.y);
		// rectMode(CENTER)
		// rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		//ellipseMode(RADIUS)
		
		image(this.image, this.x,this.y,60,60)
		pop()
		
    }

}

