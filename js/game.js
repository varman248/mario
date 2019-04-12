class Game {

	constructor(canvas){
		this.canvas = canvas;
		this.map = new Map(canvas, 2000, canvas.height, "#5c94fc");
		this.mario = new Mario();
		this.mario.scale(3);
		this.enemies = new Enemies();
		this.enemies.scale(2);
		setInterval(()=>{ 
			this.mario.updateFrames();
			this.enemies.updateFrames();
		}, 100);
	}

	update(){
		// MARIO
  		this.mario.force.update();
  		this.mario.force.checkBounds(this.map.width, this.map.height);
  		// ENEMIES
    	this.enemies.force.update();
  		this.enemies.force.checkBounds(this.map.width, this.map.height);
  		this.enemies.updatePosition();
  		this.enemies.follow(this.mario.force);
  		// CAMERA
		if(this.mario.force.p.x<this.canvas.width/2){
			this.mario.updatePosition();
		}
  		else if(this.mario.force.p.x<this.map.width-(this.canvas.width/2)){
  			this.mario.centerPosition(this.canvas.width/2, this.mario.force.p.y);
  			let p = {x:this.mario.force.v.x*-1, y:0};
  			this.map.offset(p);
  			this.enemies.offset(p);
  		}
  		else {
  			let a = (this.map.width%this.mario.force.p.x);
  			this.mario.centerPosition(this.canvas.width-a, this.mario.force.p.y);
  		}
	}

	draw(canvas){
  		this.map.draw(canvas);
  		this.enemies.draw(canvas);
  		this.mario.draw(canvas);
	}
}



/* --------------------------------------------------------- */

