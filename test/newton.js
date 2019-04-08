class Vector {

	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	add(v){
		this.x += v.x; 
		this.y += v.y; 
	}
	sub(v){
		this.x -= v.x; 
		this.y -= v.y; 
	}
	mult(n){
		this.x *= n; 
		this.y *= n; 
	}
	div(n){
		this.x /= n; 
		this.y /= n; 
	}
}

class Mover {

	constructor(){
		this.mass = 1;
		this.position = new Vector(30, 30);
		this.velocity = new Vector(0, 0);
		this.acceleration = new Vector(0, 0);
	}

	applyForce(force){
		let f = new Vector(force.x, force.y);
		f.div(this.mass);
		this.acceleration.add(force); 
	}

	update(){
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}

	checkEdges() {
		let width = canvas.width;
		let height = canvas.height;
	    if (this.position.x > width){
	        this.position.x = width;
	        this.velocity.x *= -1;
	        console.log('111');
	    } 
	    else if (this.position.x < 0){
	        this.velocity.x *= -1;
	        this.position.x = 0;
	        console.log('222');
	    }
	    if (this.position.y > height){
	        this.velocity.y *= -1;
	        this.position.y = height;
	        console.log('333');
	    }
	}

}

var canvas = $('canvas')[0];
ctx = canvas.getContext('2d');

var m = new Mover(); 

var wind = new Vector(0.01, 0);
var gravity = new Vector(0, 0.5);

m.applyForce(wind);
m.applyForce(gravity);

setInterval(()=>{
	m.checkEdges();
	m.update();
	//DRAW
	ctx.fillStyle = 'blue';
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillRect(m.position.x, m.position.y, 10, 10);
}, 1);