class bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.2,
			friction:2,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			//this.body.position.y = 600; 	
			
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
	}
}