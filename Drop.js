class Drop{
	constructor(x,y,r) {
	  var options = {
		  'restitution':0.8,
		  'friction':0.1
	  }
	  this.x=x;
	  this.y=y;
	  this.r=r;
	  this.body = Bodies.circle(x, y, r, options);
	  
	  World.add(world, this.body);
	}
 
	  updateY() {
	  if(this.body.position.y>=600){
		Matter.Body.setPosition(this.body, {x:random(0,400), y:random(10,600)});
		  }
	  }
	  
	  showDrop(){
		  fill("darkBlue");
		  ellipseMode(CENTER);
		  ellipse(this.body.position.x, this.body.position.y, this.r/2, this.r/2);
	  }
	
  };