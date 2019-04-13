/* --------------------------------------------------------- */
class Personnage {
	
	constructor(){
		this.force = new Physics(100, 100);
	}

	rayon(){
		let s = this.frameCurrent.polygons.boundingBox().height;
		this.force.r = s/2;
	}

	offset(p){
		this.force.p.x += p.x;
		this.force.p.y += p.y;
	}

	updatePosition(){
		this.centerPosition(this.force.p.x, this.force.p.y);
	}

	centerPosition(x, y){
		this.frameCurrent.polygons.centerPosition(x, y);
	}

	rest(){
		this.frameCurrent = this.frames['rest'];
	}
	
	scale(n){
		for(let f of Object.values(this.frames)){
			f.polygons.scale(n);
		}
	}
	
	boundingBox(){
		let b = this.frameCurrent.polygons.boundingBox();
		return [{x:b.minX, y:b.minY}, {x:b.maxX, y:b.minY},
				{x:b.maxX, y:b.maxY}, {x:b.minX, y:b.maxY}]
	}
	
	draw(canvas){
		this.force.exertForce({x:0, y:100});
		this.rayon();
		this.frameCurrent.polygons.draw(canvas);
	}
}

/* --------------------------------------------------------- */

class Enemies extends Personnage {

	constructor(x, y){
		super();
		this.frameWalk1 = new Pixels([{"x":2,"y":11,"c":"#bb3333"},{"x":2,"y":10,"c":"#bb3333"},{"x":2,"y":9,"c":"#bb3333"},{"x":3,"y":8,"c":"#bb3333"},{"x":3,"y":7,"c":"#bb3333"},{"x":4,"y":6,"c":"#bb3333"},{"x":5,"y":6,"c":"#000000"},{"x":6,"y":6,"c":"#000000"},{"x":7,"y":7,"c":"#000000"},{"x":7,"y":8,"c":"#000000"},{"x":8,"y":8,"c":"#000000"},{"x":9,"y":8,"c":"#000000"},{"x":10,"y":8,"c":"#000000"},{"x":5,"y":5,"c":"#bb3333"},{"x":6,"y":5,"c":"#bb3333"},{"x":6,"y":4,"c":"#bb3333"},{"x":7,"y":3,"c":"#bb3333"},{"x":8,"y":2,"c":"#bb3333"},{"x":9,"y":2,"c":"#bb3333"},{"x":10,"y":2,"c":"#bb3333"},{"x":11,"y":2,"c":"#bb3333"},{"x":6,"y":7,"c":"#eecccc"},{"x":6,"y":8,"c":"#eecccc"},{"x":6,"y":9,"c":"#eecccc"},{"x":6,"y":10,"c":"#eecccc"},{"x":7,"y":10,"c":"#eecccc"},{"x":8,"y":10,"c":"#eecccc"},{"x":8,"y":9,"c":"#eecccc"},{"x":7,"y":9,"c":"#000000"},{"x":5,"y":7,"c":"#bb3333"},{"x":5,"y":8,"c":"#bb3333"},{"x":5,"y":10,"c":"#bb3333"},{"x":5,"y":9,"c":"#bb3333"},{"x":4,"y":7,"c":"#bb3333"},{"x":4,"y":8,"c":"#bb3333"},{"x":4,"y":9,"c":"#bb3333"},{"x":4,"y":10,"c":"#bb3333"},{"x":4,"y":11,"c":"#bb3333"},{"x":5,"y":11,"c":"#bb3333"},{"x":6,"y":11,"c":"#bb3333"},{"x":7,"y":11,"c":"#bb3333"},{"x":8,"y":11,"c":"#bb3333"},{"x":9,"y":11,"c":"#bb3333"},{"x":9,"y":10,"c":"#bb3333"},{"x":9,"y":9,"c":"#bb3333"},{"x":10,"y":9,"c":"#bb3333"},{"x":10,"y":10,"c":"#bb3333"},{"x":10,"y":11,"c":"#bb3333"},{"x":11,"y":8,"c":"#000000"},{"x":12,"y":8,"c":"#000000"},{"x":12,"y":9,"c":"#000000"},{"x":12,"y":7,"c":"#000000"},{"x":13,"y":6,"c":"#000000"},{"x":14,"y":6,"c":"#000000"},{"x":11,"y":9,"c":"#eecccc"},{"x":11,"y":10,"c":"#eecccc"},{"x":12,"y":10,"c":"#eecccc"},{"x":13,"y":10,"c":"#eecccc"},{"x":13,"y":9,"c":"#eecccc"},{"x":13,"y":8,"c":"#eecccc"},{"x":13,"y":7,"c":"#eecccc"},{"x":11,"y":11,"c":"#bb3333"},{"x":12,"y":11,"c":"#bb3333"},{"x":13,"y":11,"c":"#bb3333"},{"x":14,"y":11,"c":"#bb3333"},{"x":14,"y":10,"c":"#bb3333"},{"x":14,"y":9,"c":"#bb3333"},{"x":14,"y":8,"c":"#bb3333"},{"x":14,"y":7,"c":"#bb3333"},{"x":12,"y":3,"c":"#bb3333"},{"x":13,"y":4,"c":"#bb3333"},{"x":14,"y":5,"c":"#bb3333"},{"x":15,"y":6,"c":"#bb3333"},{"x":16,"y":7,"c":"#bb3333"},{"x":16,"y":8,"c":"#bb3333"},{"x":16,"y":9,"c":"#bb3333"},{"x":17,"y":9,"c":"#bb3333"},{"x":15,"y":8,"c":"#bb3333"},{"x":15,"y":7,"c":"#bb3333"},{"x":15,"y":9,"c":"#bb3333"},{"x":17,"y":10,"c":"#bb3333"},{"x":16,"y":10,"c":"#bb3333"},{"x":15,"y":10,"c":"#bb3333"},{"x":15,"y":11,"c":"#bb3333"},{"x":17,"y":11,"c":"#bb3333"},{"x":16,"y":11,"c":"#bb3333"},{"x":3,"y":11,"c":"#bb3333"},{"x":3,"y":10,"c":"#bb3333"},{"x":3,"y":9,"c":"#bb3333"},{"x":8,"y":7,"c":"#bb3333"},{"x":7,"y":6,"c":"#bb3333"},{"x":7,"y":5,"c":"#bb3333"},{"x":7,"y":4,"c":"#bb3333"},{"x":8,"y":5,"c":"#bb3333"},{"x":8,"y":6,"c":"#bb3333"},{"x":8,"y":4,"c":"#bb3333"},{"x":8,"y":3,"c":"#bb3333"},{"x":9,"y":3,"c":"#bb3333"},{"x":9,"y":7,"c":"#bb3333"},{"x":10,"y":7,"c":"#bb3333"},{"x":10,"y":6,"c":"#bb3333"},{"x":9,"y":6,"c":"#bb3333"},{"x":9,"y":5,"c":"#bb3333"},{"x":10,"y":5,"c":"#bb3333"},{"x":10,"y":4,"c":"#bb3333"},{"x":9,"y":4,"c":"#bb3333"},{"x":10,"y":3,"c":"#bb3333"},{"x":11,"y":3,"c":"#bb3333"},{"x":11,"y":7,"c":"#bb3333"},{"x":12,"y":6,"c":"#bb3333"},{"x":13,"y":5,"c":"#bb3333"},{"x":12,"y":5,"c":"#bb3333"},{"x":11,"y":6,"c":"#bb3333"},{"x":11,"y":5,"c":"#bb3333"},{"x":11,"y":4,"c":"#bb3333"},{"x":12,"y":4,"c":"#bb3333"},{"x":16,"y":12,"c":"#bb3333"},{"x":15,"y":12,"c":"#bb3333"},{"x":14,"y":12,"c":"#bb3333"},{"x":13,"y":12,"c":"#bb3333"},{"x":3,"y":12,"c":"#bb3333"},{"x":4,"y":12,"c":"#bb3333"},{"x":5,"y":12,"c":"#bb3333"},{"x":6,"y":12,"c":"#bb3333"},{"x":6,"y":13,"c":"#eecccc"},{"x":6,"y":14,"c":"#eecccc"},{"x":7,"y":14,"c":"#eecccc"},{"x":7,"y":13,"c":"#eecccc"},{"x":7,"y":12,"c":"#eecccc"},{"x":8,"y":12,"c":"#eecccc"},{"x":9,"y":12,"c":"#eecccc"},{"x":10,"y":12,"c":"#eecccc"},{"x":11,"y":12,"c":"#eecccc"},{"x":12,"y":12,"c":"#eecccc"},{"x":12,"y":13,"c":"#eecccc"},{"x":13,"y":13,"c":"#eecccc"},{"x":13,"y":14,"c":"#eecccc"},{"x":12,"y":14,"c":"#eecccc"},{"x":11,"y":14,"c":"#eecccc"},{"x":10,"y":14,"c":"#eecccc"},{"x":9,"y":14,"c":"#eecccc"},{"x":8,"y":14,"c":"#eecccc"},{"x":8,"y":13,"c":"#eecccc"},{"x":9,"y":13,"c":"#eecccc"},{"x":10,"y":13,"c":"#eecccc"},{"x":11,"y":13,"c":"#eecccc"},{"x":6,"y":15,"c":"#000000"},{"x":7,"y":16,"c":"#000000"},{"x":8,"y":17,"c":"#000000"},{"x":7,"y":17,"c":"#000000"},{"x":6,"y":16,"c":"#000000"},{"x":5,"y":15,"c":"#000000"},{"x":5,"y":16,"c":"#000000"},{"x":6,"y":17,"c":"#000000"},{"x":8,"y":15,"c":"#eecccc"},{"x":9,"y":16,"c":"#eecccc"},{"x":9,"y":15,"c":"#eecccc"},{"x":10,"y":16,"c":"#eecccc"},{"x":10,"y":15,"c":"#eecccc"},{"x":11,"y":15,"c":"#eecccc"},{"x":14,"y":15,"c":"#000000"},{"x":15,"y":15,"c":"#000000"},{"x":15,"y":16,"c":"#000000"},{"x":16,"y":16,"c":"#000000"},{"x":15,"y":17,"c":"#000000"},{"x":14,"y":14,"c":"#000000"},{"x":15,"y":14,"c":"#000000"},{"x":16,"y":15,"c":"#000000"},{"x":14,"y":17,"c":"#000000"},{"x":13,"y":17,"c":"#000000"},{"x":12,"y":17,"c":"#000000"},{"x":13,"y":15,"c":"#000000"},{"x":12,"y":16,"c":"#000000"},{"x":14,"y":16,"c":"#000000"},{"x":13,"y":16,"c":"#000000"},{"x":11,"y":17,"c":"#000000"},{"x":8,"y":16,"c":"#eecccc"},{"x":7,"y":15,"c":"#eecccc"},{"x":11,"y":16,"c":"#000000"},{"x":12,"y":15,"c":"#000000"}]);
		this.frameWalk2 = new Pixels([{"x":2,"y":11,"c":"#bb3333"},{"x":2,"y":10,"c":"#bb3333"},{"x":2,"y":9,"c":"#bb3333"},{"x":3,"y":8,"c":"#bb3333"},{"x":3,"y":7,"c":"#bb3333"},{"x":4,"y":6,"c":"#bb3333"},{"x":5,"y":6,"c":"#000000"},{"x":6,"y":6,"c":"#000000"},{"x":7,"y":7,"c":"#000000"},{"x":7,"y":8,"c":"#000000"},{"x":8,"y":8,"c":"#000000"},{"x":9,"y":8,"c":"#000000"},{"x":10,"y":8,"c":"#000000"},{"x":5,"y":5,"c":"#bb3333"},{"x":6,"y":5,"c":"#bb3333"},{"x":6,"y":4,"c":"#bb3333"},{"x":7,"y":3,"c":"#bb3333"},{"x":8,"y":2,"c":"#bb3333"},{"x":9,"y":2,"c":"#bb3333"},{"x":10,"y":2,"c":"#bb3333"},{"x":11,"y":2,"c":"#bb3333"},{"x":6,"y":7,"c":"#eecccc"},{"x":6,"y":8,"c":"#eecccc"},{"x":6,"y":9,"c":"#eecccc"},{"x":6,"y":10,"c":"#eecccc"},{"x":7,"y":10,"c":"#eecccc"},{"x":8,"y":10,"c":"#eecccc"},{"x":8,"y":9,"c":"#eecccc"},{"x":7,"y":9,"c":"#000000"},{"x":5,"y":7,"c":"#bb3333"},{"x":5,"y":8,"c":"#bb3333"},{"x":5,"y":10,"c":"#bb3333"},{"x":5,"y":9,"c":"#bb3333"},{"x":4,"y":7,"c":"#bb3333"},{"x":4,"y":8,"c":"#bb3333"},{"x":4,"y":9,"c":"#bb3333"},{"x":4,"y":10,"c":"#bb3333"},{"x":4,"y":11,"c":"#bb3333"},{"x":5,"y":11,"c":"#bb3333"},{"x":6,"y":11,"c":"#bb3333"},{"x":7,"y":11,"c":"#bb3333"},{"x":8,"y":11,"c":"#bb3333"},{"x":9,"y":11,"c":"#bb3333"},{"x":9,"y":10,"c":"#bb3333"},{"x":9,"y":9,"c":"#bb3333"},{"x":10,"y":9,"c":"#bb3333"},{"x":10,"y":10,"c":"#bb3333"},{"x":10,"y":11,"c":"#bb3333"},{"x":11,"y":8,"c":"#000000"},{"x":12,"y":8,"c":"#000000"},{"x":12,"y":9,"c":"#000000"},{"x":12,"y":7,"c":"#000000"},{"x":13,"y":6,"c":"#000000"},{"x":14,"y":6,"c":"#000000"},{"x":11,"y":9,"c":"#eecccc"},{"x":11,"y":10,"c":"#eecccc"},{"x":12,"y":10,"c":"#eecccc"},{"x":13,"y":10,"c":"#eecccc"},{"x":13,"y":9,"c":"#eecccc"},{"x":13,"y":8,"c":"#eecccc"},{"x":13,"y":7,"c":"#eecccc"},{"x":11,"y":11,"c":"#bb3333"},{"x":12,"y":11,"c":"#bb3333"},{"x":13,"y":11,"c":"#bb3333"},{"x":14,"y":11,"c":"#bb3333"},{"x":14,"y":10,"c":"#bb3333"},{"x":14,"y":9,"c":"#bb3333"},{"x":14,"y":8,"c":"#bb3333"},{"x":14,"y":7,"c":"#bb3333"},{"x":12,"y":3,"c":"#bb3333"},{"x":13,"y":4,"c":"#bb3333"},{"x":14,"y":5,"c":"#bb3333"},{"x":15,"y":6,"c":"#bb3333"},{"x":16,"y":7,"c":"#bb3333"},{"x":16,"y":8,"c":"#bb3333"},{"x":16,"y":9,"c":"#bb3333"},{"x":17,"y":9,"c":"#bb3333"},{"x":15,"y":8,"c":"#bb3333"},{"x":15,"y":7,"c":"#bb3333"},{"x":15,"y":9,"c":"#bb3333"},{"x":17,"y":10,"c":"#bb3333"},{"x":16,"y":10,"c":"#bb3333"},{"x":15,"y":10,"c":"#bb3333"},{"x":15,"y":11,"c":"#bb3333"},{"x":17,"y":11,"c":"#bb3333"},{"x":16,"y":11,"c":"#bb3333"},{"x":3,"y":11,"c":"#bb3333"},{"x":3,"y":10,"c":"#bb3333"},{"x":3,"y":9,"c":"#bb3333"},{"x":8,"y":7,"c":"#bb3333"},{"x":7,"y":6,"c":"#bb3333"},{"x":7,"y":5,"c":"#bb3333"},{"x":7,"y":4,"c":"#bb3333"},{"x":8,"y":5,"c":"#bb3333"},{"x":8,"y":6,"c":"#bb3333"},{"x":8,"y":4,"c":"#bb3333"},{"x":8,"y":3,"c":"#bb3333"},{"x":9,"y":3,"c":"#bb3333"},{"x":9,"y":7,"c":"#bb3333"},{"x":10,"y":7,"c":"#bb3333"},{"x":10,"y":6,"c":"#bb3333"},{"x":9,"y":6,"c":"#bb3333"},{"x":9,"y":5,"c":"#bb3333"},{"x":10,"y":5,"c":"#bb3333"},{"x":10,"y":4,"c":"#bb3333"},{"x":9,"y":4,"c":"#bb3333"},{"x":10,"y":3,"c":"#bb3333"},{"x":11,"y":3,"c":"#bb3333"},{"x":11,"y":7,"c":"#bb3333"},{"x":12,"y":6,"c":"#bb3333"},{"x":13,"y":5,"c":"#bb3333"},{"x":12,"y":5,"c":"#bb3333"},{"x":11,"y":6,"c":"#bb3333"},{"x":11,"y":5,"c":"#bb3333"},{"x":11,"y":4,"c":"#bb3333"},{"x":12,"y":4,"c":"#bb3333"},{"x":16,"y":12,"c":"#bb3333"},{"x":15,"y":12,"c":"#bb3333"},{"x":14,"y":12,"c":"#bb3333"},{"x":13,"y":12,"c":"#bb3333"},{"x":3,"y":12,"c":"#bb3333"},{"x":4,"y":12,"c":"#bb3333"},{"x":5,"y":12,"c":"#bb3333"},{"x":6,"y":12,"c":"#bb3333"},{"x":6,"y":13,"c":"#eecccc"},{"x":6,"y":14,"c":"#eecccc"},{"x":7,"y":14,"c":"#eecccc"},{"x":7,"y":13,"c":"#eecccc"},{"x":7,"y":12,"c":"#eecccc"},{"x":8,"y":12,"c":"#eecccc"},{"x":9,"y":12,"c":"#eecccc"},{"x":10,"y":12,"c":"#eecccc"},{"x":11,"y":12,"c":"#eecccc"},{"x":12,"y":12,"c":"#eecccc"},{"x":12,"y":13,"c":"#eecccc"},{"x":13,"y":13,"c":"#eecccc"},{"x":13,"y":14,"c":"#eecccc"},{"x":12,"y":14,"c":"#eecccc"},{"x":11,"y":14,"c":"#eecccc"},{"x":10,"y":14,"c":"#eecccc"},{"x":9,"y":14,"c":"#eecccc"},{"x":8,"y":14,"c":"#eecccc"},{"x":8,"y":13,"c":"#eecccc"},{"x":9,"y":13,"c":"#eecccc"},{"x":10,"y":13,"c":"#eecccc"},{"x":11,"y":13,"c":"#eecccc"},{"x":6,"y":15,"c":"#000000"},{"x":7,"y":16,"c":"#000000"},{"x":8,"y":17,"c":"#000000"},{"x":7,"y":17,"c":"#000000"},{"x":6,"y":16,"c":"#000000"},{"x":5,"y":15,"c":"#000000"},{"x":5,"y":16,"c":"#000000"},{"x":6,"y":17,"c":"#000000"},{"x":8,"y":15,"c":"#eecccc"},{"x":9,"y":16,"c":"#eecccc"},{"x":9,"y":15,"c":"#eecccc"},{"x":10,"y":16,"c":"#eecccc"},{"x":10,"y":15,"c":"#eecccc"},{"x":11,"y":15,"c":"#eecccc"},{"x":14,"y":15,"c":"#000000"},{"x":13,"y":17,"c":"#000000"},{"x":12,"y":17,"c":"#000000"},{"x":13,"y":15,"c":"#000000"},{"x":12,"y":16,"c":"#000000"},{"x":14,"y":16,"c":"#000000"},{"x":13,"y":16,"c":"#000000"},{"x":11,"y":17,"c":"#000000"},{"x":11,"y":16,"c":"#eecccc"},{"x":12,"y":15,"c":"#eecccc"},{"x":5,"y":14,"c":"#000000"},{"x":4,"y":14,"c":"#000000"},{"x":4,"y":15,"c":"#000000"},{"x":3,"y":15,"c":"#000000"},{"x":3,"y":16,"c":"#000000"},{"x":4,"y":16,"c":"#000000"},{"x":4,"y":17,"c":"#000000"},{"x":5,"y":17,"c":"#000000"},{"x":7,"y":15,"c":"#000000"},{"x":8,"y":16,"c":"#000000"}]);
		this.frames = {'rest':this.frameWalk1, 'walk':this.frameWalk2};
		this.frameCurrent = this.frames['rest'];
	}
	
	updateFrames(){
		// REST FRAME
		if (Math.abs(this.force.v.x) <= .5 && Math.abs(this.force.v.y) <= .5 && this.force.ground){ this.rest(); }
		// WALK ON RIGHT
		else if (this.force.v.x != 0 && this.force.ground) { this.walk(); }
	}

	follow(f){
		let s = 1;
		if (this.force.p.x > f.p.x){
			s = -1;
		}

		this.force.exertForce({x:10*s, y:0});
	}

	walk(){
		if (this.frameCurrent == this.frames['rest']){
			this.frameCurrent = this.frames['walk'];
		}
		else {
			this.frameCurrent = this.frames['rest'];
		}
	}


}

/* --------------------------------------------------------- */

class Mario extends Personnage {
	
	constructor(){
		super();
		this.frameRest = new Pixels([{"x":4,"y":17,"c":"#a52a2a"},{"x":5,"y":16,"c":"#a52a2a"},{"x":7,"y":16,"c":"#a52a2a"},{"x":6,"y":16,"c":"#a52a2a"},{"x":5,"y":17,"c":"#a52a2a"},{"x":6,"y":17,"c":"#a52a2a"},{"x":7,"y":17,"c":"#a52a2a"},{"x":7,"y":15,"c":"#ff0000"},{"x":6,"y":15,"c":"#ff0000"},{"x":6,"y":14,"c":"#ff0000"},{"x":8,"y":14,"c":"#ff0000"},{"x":7,"y":14,"c":"#ff0000"},{"x":8,"y":15,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":11,"y":15,"c":"#ff0000"},{"x":12,"y":15,"c":"#ff0000"},{"x":12,"y":14,"c":"#ff0000"},{"x":13,"y":15,"c":"#ff0000"},{"x":13,"y":14,"c":"#ff0000"},{"x":12,"y":16,"c":"#a52a2a"},{"x":12,"y":17,"c":"#a52a2a"},{"x":13,"y":17,"c":"#a52a2a"},{"x":13,"y":16,"c":"#a52a2a"},{"x":14,"y":17,"c":"#a52a2a"},{"x":14,"y":16,"c":"#a52a2a"},{"x":15,"y":17,"c":"#a52a2a"},{"x":7,"y":13,"c":"#ff0000"},{"x":7,"y":12,"c":"#ff0000"},{"x":8,"y":13,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":10,"y":12,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":10,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":12,"y":12,"c":"#ff0000"},{"x":12,"y":13,"c":"#ff0000"},{"x":8,"y":11,"c":"#ff0000"},{"x":8,"y":10,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":10,"y":11,"c":"#ff0000"},{"x":9,"y":11,"c":"#ff0000"},{"x":11,"y":11,"c":"#ff0000"},{"x":11,"y":10,"c":"#ff0000"},{"x":6,"y":12,"c":"#a52a2a"},{"x":7,"y":11,"c":"#a52a2a"},{"x":6,"y":11,"c":"#a52a2a"},{"x":7,"y":10,"c":"#a52a2a"},{"x":6,"y":9,"c":"#a52a2a"},{"x":7,"y":9,"c":"#a52a2a"},{"x":6,"y":10,"c":"#a52a2a"},{"x":5,"y":10,"c":"#a52a2a"},{"x":5,"y":11,"c":"#a52a2a"},{"x":4,"y":11,"c":"#a52a2a"},{"x":9,"y":10,"c":"#a52a2a"},{"x":10,"y":10,"c":"#a52a2a"},{"x":9,"y":9,"c":"#a52a2a"},{"x":10,"y":9,"c":"#a52a2a"},{"x":11,"y":9,"c":"#a52a2a"},{"x":12,"y":10,"c":"#a52a2a"},{"x":12,"y":11,"c":"#a52a2a"},{"x":13,"y":10,"c":"#a52a2a"},{"x":13,"y":11,"c":"#a52a2a"},{"x":6,"y":13,"c":"#ffa500"},{"x":5,"y":13,"c":"#ffa500"},{"x":5,"y":12,"c":"#ffa500"},{"x":4,"y":12,"c":"#ffa500"},{"x":4,"y":13,"c":"#ffa500"},{"x":4,"y":14,"c":"#ffa500"},{"x":5,"y":14,"c":"#ffa500"},{"x":13,"y":13,"c":"#ffa500"},{"x":15,"y":14,"c":"#ffa500"},{"x":14,"y":14,"c":"#ffa500"},{"x":14,"y":13,"c":"#ffa500"},{"x":15,"y":13,"c":"#ffa500"},{"x":15,"y":12,"c":"#ffa500"},{"x":14,"y":12,"c":"#ffa500"},{"x":13,"y":12,"c":"#a52a2a"},{"x":11,"y":12,"c":"#ffa500"},{"x":8,"y":12,"c":"#ffa500"},{"x":14,"y":11,"c":"#a52a2a"},{"x":15,"y":11,"c":"#a52a2a"},{"x":14,"y":10,"c":"#a52a2a"},{"x":7,"y":8,"c":"#ffa500"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":8,"c":"#ffa500"},{"x":8,"y":8,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":10,"y":8,"c":"#ffa500"},{"x":6,"y":7,"c":"#a52a2a"},{"x":5,"y":7,"c":"#a52a2a"},{"x":5,"y":6,"c":"#a52a2a"},{"x":5,"y":5,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":11,"y":7,"c":"#a52a2a"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":13,"y":8,"c":"#ffa500"},{"x":14,"y":7,"c":"#a52a2a"},{"x":13,"y":6,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":15,"y":6,"c":"#ffa500"},{"x":14,"y":5,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":11,"y":6,"c":"#ffa500"},{"x":11,"y":5,"c":"#a52a2a"},{"x":11,"y":4,"c":"#a52a2a"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":13,"y":3,"c":"#ff0000"},{"x":14,"y":3,"c":"#ff0000"},{"x":12,"y":4,"c":"#ffa500"}]);
		this.frameWalk1 = new Pixels([{"x":8,"y":9,"c":"#ff0000"},{"x":6,"y":9,"c":"#a52a2a"},{"x":7,"y":9,"c":"#a52a2a"},{"x":9,"y":9,"c":"#a52a2a"},{"x":10,"y":9,"c":"#a52a2a"},{"x":11,"y":9,"c":"#a52a2a"},{"x":7,"y":8,"c":"#ffa500"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":8,"c":"#ffa500"},{"x":8,"y":8,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":10,"y":8,"c":"#ffa500"},{"x":6,"y":7,"c":"#a52a2a"},{"x":5,"y":7,"c":"#a52a2a"},{"x":5,"y":6,"c":"#a52a2a"},{"x":5,"y":5,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":11,"y":7,"c":"#a52a2a"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":13,"y":8,"c":"#ffa500"},{"x":14,"y":7,"c":"#a52a2a"},{"x":13,"y":6,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":15,"y":6,"c":"#ffa500"},{"x":14,"y":5,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":11,"y":6,"c":"#ffa500"},{"x":11,"y":5,"c":"#a52a2a"},{"x":11,"y":4,"c":"#a52a2a"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":13,"y":3,"c":"#ff0000"},{"x":14,"y":3,"c":"#ff0000"},{"x":12,"y":4,"c":"#ffa500"},{"x":12,"y":10,"c":"#a52a2a"},{"x":8,"y":10,"c":"#a52a2a"},{"x":7,"y":10,"c":"#a52a2a"},{"x":7,"y":11,"c":"#a52a2a"},{"x":7,"y":12,"c":"#a52a2a"},{"x":8,"y":12,"c":"#a52a2a"},{"x":7,"y":14,"c":"#a52a2a"},{"x":7,"y":13,"c":"#a52a2a"},{"x":6,"y":13,"c":"#a52a2a"},{"x":5,"y":12,"c":"#a52a2a"},{"x":5,"y":11,"c":"#a52a2a"},{"x":5,"y":10,"c":"#a52a2a"},{"x":6,"y":10,"c":"#a52a2a"},{"x":6,"y":12,"c":"#a52a2a"},{"x":6,"y":11,"c":"#a52a2a"},{"x":8,"y":11,"c":"#ff0000"},{"x":9,"y":10,"c":"#ff0000"},{"x":10,"y":10,"c":"#ff0000"},{"x":11,"y":10,"c":"#a52a2a"},{"x":9,"y":11,"c":"#ff0000"},{"x":10,"y":11,"c":"#ffa500"},{"x":13,"y":11,"c":"#ffa500"},{"x":11,"y":11,"c":"#ff0000"},{"x":12,"y":11,"c":"#ff0000"},{"x":11,"y":12,"c":"#ff0000"},{"x":12,"y":12,"c":"#ff0000"},{"x":10,"y":12,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":13,"y":12,"c":"#ff0000"},{"x":13,"y":13,"c":"#ff0000"},{"x":12,"y":13,"c":"#ff0000"},{"x":12,"y":14,"c":"#ff0000"},{"x":8,"y":13,"c":"#ffa500"},{"x":9,"y":13,"c":"#ffa500"},{"x":10,"y":13,"c":"#ffa500"},{"x":9,"y":14,"c":"#ffa500"},{"x":8,"y":14,"c":"#ffa500"},{"x":10,"y":15,"c":"#a52a2a"},{"x":11,"y":15,"c":"#a52a2a"},{"x":12,"y":15,"c":"#a52a2a"},{"x":13,"y":16,"c":"#a52a2a"},{"x":12,"y":16,"c":"#a52a2a"},{"x":11,"y":16,"c":"#a52a2a"},{"x":10,"y":16,"c":"#a52a2a"},{"x":7,"y":15,"c":"#ff0000"},{"x":8,"y":15,"c":"#ff0000"},{"x":9,"y":15,"c":"#ff0000"},{"x":5,"y":13,"c":"#ff0000"},{"x":6,"y":14,"c":"#ff0000"},{"x":9,"y":16,"c":"#a52a2a"},{"x":8,"y":16,"c":"#a52a2a"},{"x":7,"y":16,"c":"#a52a2a"},{"x":7,"y":17,"c":"#a52a2a"},{"x":8,"y":17,"c":"#a52a2a"},{"x":9,"y":17,"c":"#a52a2a"},{"x":10,"y":17,"c":"#a52a2a"}]);
		this.frameWalk2 = new Pixels([{"x":6,"y":9,"c":"#a52a2a"},{"x":7,"y":9,"c":"#a52a2a"},{"x":9,"y":9,"c":"#a52a2a"},{"x":11,"y":9,"c":"#a52a2a"},{"x":7,"y":8,"c":"#ffa500"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":8,"c":"#ffa500"},{"x":8,"y":8,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":10,"y":8,"c":"#ffa500"},{"x":6,"y":7,"c":"#a52a2a"},{"x":5,"y":7,"c":"#a52a2a"},{"x":5,"y":6,"c":"#a52a2a"},{"x":5,"y":5,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":11,"y":7,"c":"#a52a2a"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":13,"y":8,"c":"#ffa500"},{"x":14,"y":7,"c":"#a52a2a"},{"x":13,"y":6,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":15,"y":6,"c":"#ffa500"},{"x":14,"y":5,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":11,"y":6,"c":"#ffa500"},{"x":11,"y":5,"c":"#a52a2a"},{"x":11,"y":4,"c":"#a52a2a"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":13,"y":3,"c":"#ff0000"},{"x":14,"y":3,"c":"#ff0000"},{"x":12,"y":4,"c":"#ffa500"},{"x":8,"y":9,"c":"#a52a2a"},{"x":10,"y":9,"c":"#ff0000"},{"x":11,"y":10,"c":"#a52a2a"},{"x":11,"y":11,"c":"#a52a2a"},{"x":10,"y":11,"c":"#a52a2a"},{"x":10,"y":10,"c":"#a52a2a"},{"x":9,"y":10,"c":"#a52a2a"},{"x":8,"y":10,"c":"#a52a2a"},{"x":7,"y":10,"c":"#a52a2a"},{"x":6,"y":10,"c":"#a52a2a"},{"x":9,"y":11,"c":"#a52a2a"},{"x":8,"y":11,"c":"#a52a2a"},{"x":7,"y":11,"c":"#a52a2a"},{"x":12,"y":10,"c":"#ffa500"},{"x":12,"y":11,"c":"#ffa500"},{"x":13,"y":11,"c":"#ffa500"},{"x":13,"y":10,"c":"#ffa500"},{"x":14,"y":10,"c":"#ffa500"},{"x":13,"y":9,"c":"#ffa500"},{"x":5,"y":10,"c":"#ffa500"},{"x":4,"y":11,"c":"#ffa500"},{"x":5,"y":11,"c":"#ffa500"},{"x":6,"y":11,"c":"#ff0000"},{"x":6,"y":12,"c":"#ff0000"},{"x":6,"y":13,"c":"#ff0000"},{"x":5,"y":13,"c":"#ff0000"},{"x":5,"y":14,"c":"#ff0000"},{"x":6,"y":14,"c":"#ff0000"},{"x":7,"y":14,"c":"#ff0000"},{"x":7,"y":13,"c":"#ff0000"},{"x":7,"y":12,"c":"#ff0000"},{"x":8,"y":12,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":10,"y":12,"c":"#ff0000"},{"x":11,"y":12,"c":"#ff0000"},{"x":12,"y":12,"c":"#ff0000"},{"x":12,"y":13,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":8,"y":13,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":10,"y":13,"c":"#ff0000"},{"x":9,"y":15,"c":"#a52a2a"},{"x":10,"y":15,"c":"#a52a2a"},{"x":9,"y":16,"c":"#a52a2a"},{"x":10,"y":16,"c":"#a52a2a"},{"x":11,"y":16,"c":"#a52a2a"},{"x":8,"y":15,"c":"#a52a2a"},{"x":8,"y":16,"c":"#a52a2a"},{"x":4,"y":13,"c":"#a52a2a"},{"x":4,"y":12,"c":"#a52a2a"},{"x":5,"y":12,"c":"#a52a2a"},{"x":3,"y":14,"c":"#a52a2a"},{"x":4,"y":14,"c":"#a52a2a"},{"x":3,"y":15,"c":"#a52a2a"}]);
		this.frameWalk3 = new Pixels([{"x":6,"y":9,"c":"#a52a2a"},{"x":7,"y":9,"c":"#a52a2a"},{"x":11,"y":9,"c":"#a52a2a"},{"x":7,"y":8,"c":"#ffa500"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":8,"c":"#ffa500"},{"x":8,"y":8,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":10,"y":8,"c":"#ffa500"},{"x":6,"y":7,"c":"#a52a2a"},{"x":5,"y":7,"c":"#a52a2a"},{"x":5,"y":6,"c":"#a52a2a"},{"x":5,"y":5,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":11,"y":7,"c":"#a52a2a"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":13,"y":8,"c":"#ffa500"},{"x":14,"y":7,"c":"#a52a2a"},{"x":13,"y":6,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":15,"y":6,"c":"#ffa500"},{"x":14,"y":5,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":11,"y":6,"c":"#ffa500"},{"x":11,"y":5,"c":"#a52a2a"},{"x":11,"y":4,"c":"#a52a2a"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":13,"y":3,"c":"#ff0000"},{"x":14,"y":3,"c":"#ff0000"},{"x":12,"y":4,"c":"#ffa500"},{"x":11,"y":10,"c":"#a52a2a"},{"x":7,"y":10,"c":"#a52a2a"},{"x":6,"y":10,"c":"#a52a2a"},{"x":7,"y":11,"c":"#a52a2a"},{"x":14,"y":10,"c":"#ffa500"},{"x":6,"y":12,"c":"#ff0000"},{"x":6,"y":13,"c":"#ff0000"},{"x":5,"y":14,"c":"#ff0000"},{"x":6,"y":14,"c":"#ff0000"},{"x":7,"y":14,"c":"#ff0000"},{"x":7,"y":13,"c":"#ff0000"},{"x":7,"y":12,"c":"#ff0000"},{"x":8,"y":12,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":10,"y":12,"c":"#ff0000"},{"x":11,"y":12,"c":"#ff0000"},{"x":12,"y":12,"c":"#ff0000"},{"x":12,"y":13,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":8,"y":13,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":10,"y":13,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":9,"y":9,"c":"#ff0000"},{"x":10,"y":9,"c":"#a52a2a"},{"x":10,"y":10,"c":"#ff0000"},{"x":10,"y":11,"c":"#ff0000"},{"x":11,"y":11,"c":"#ff0000"},{"x":12,"y":11,"c":"#ff0000"},{"x":12,"y":10,"c":"#a52a2a"},{"x":13,"y":10,"c":"#a52a2a"},{"x":13,"y":11,"c":"#a52a2a"},{"x":14,"y":11,"c":"#a52a2a"},{"x":15,"y":10,"c":"#ffa500"},{"x":15,"y":11,"c":"#ffa500"},{"x":16,"y":11,"c":"#ffa500"},{"x":16,"y":10,"c":"#ffa500"},{"x":15,"y":12,"c":"#a52a2a"},{"x":15,"y":13,"c":"#a52a2a"},{"x":14,"y":13,"c":"#a52a2a"},{"x":14,"y":14,"c":"#a52a2a"},{"x":15,"y":14,"c":"#a52a2a"},{"x":14,"y":15,"c":"#a52a2a"},{"x":15,"y":15,"c":"#a52a2a"},{"x":13,"y":13,"c":"#ff0000"},{"x":13,"y":14,"c":"#ff0000"},{"x":13,"y":15,"c":"#ff0000"},{"x":12,"y":15,"c":"#ff0000"},{"x":12,"y":14,"c":"#ff0000"},{"x":8,"y":10,"c":"#ff0000"},{"x":9,"y":10,"c":"#ff0000"},{"x":8,"y":11,"c":"#ff0000"},{"x":6,"y":11,"c":"#a52a2a"},{"x":5,"y":9,"c":"#a52a2a"},{"x":4,"y":10,"c":"#a52a2a"},{"x":5,"y":10,"c":"#a52a2a"},{"x":4,"y":9,"c":"#a52a2a"},{"x":5,"y":13,"c":"#ff0000"},{"x":4,"y":14,"c":"#ff0000"},{"x":3,"y":10,"c":"#ffa500"},{"x":2,"y":10,"c":"#ffa500"},{"x":3,"y":11,"c":"#ffa500"},{"x":2,"y":11,"c":"#ffa500"},{"x":4,"y":11,"c":"#ffa500"},{"x":3,"y":12,"c":"#ffa500"},{"x":2,"y":12,"c":"#ffa500"},{"x":4,"y":15,"c":"#a52a2a"},{"x":5,"y":16,"c":"#a52a2a"},{"x":3,"y":15,"c":"#a52a2a"},{"x":4,"y":16,"c":"#a52a2a"},{"x":3,"y":16,"c":"#a52a2a"},{"x":4,"y":17,"c":"#a52a2a"},{"x":5,"y":17,"c":"#a52a2a"},{"x":6,"y":17,"c":"#a52a2a"},{"x":5,"y":15,"c":"#ff0000"},{"x":6,"y":15,"c":"#ff0000"},{"x":7,"y":15,"c":"#ff0000"},{"x":8,"y":14,"c":"#ff0000"},{"x":9,"y":11,"c":"#ffa500"}]);
		this.frameJump = new Pixels([{"x":6,"y":9,"c":"#a52a2a"},{"x":7,"y":9,"c":"#a52a2a"},{"x":11,"y":9,"c":"#a52a2a"},{"x":7,"y":8,"c":"#ffa500"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":8,"c":"#ffa500"},{"x":8,"y":8,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":10,"y":8,"c":"#ffa500"},{"x":6,"y":7,"c":"#a52a2a"},{"x":5,"y":7,"c":"#a52a2a"},{"x":5,"y":6,"c":"#a52a2a"},{"x":5,"y":5,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":11,"y":7,"c":"#a52a2a"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":13,"y":8,"c":"#ffa500"},{"x":14,"y":7,"c":"#a52a2a"},{"x":13,"y":6,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":15,"y":6,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":11,"y":6,"c":"#ffa500"},{"x":11,"y":5,"c":"#a52a2a"},{"x":11,"y":4,"c":"#a52a2a"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":13,"y":3,"c":"#ff0000"},{"x":14,"y":3,"c":"#ff0000"},{"x":12,"y":4,"c":"#ffa500"},{"x":11,"y":10,"c":"#a52a2a"},{"x":7,"y":10,"c":"#a52a2a"},{"x":6,"y":10,"c":"#a52a2a"},{"x":7,"y":11,"c":"#a52a2a"},{"x":6,"y":12,"c":"#ff0000"},{"x":6,"y":13,"c":"#ff0000"},{"x":6,"y":14,"c":"#ff0000"},{"x":7,"y":14,"c":"#ff0000"},{"x":7,"y":13,"c":"#ff0000"},{"x":8,"y":12,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":11,"y":12,"c":"#ff0000"},{"x":12,"y":12,"c":"#ff0000"},{"x":12,"y":13,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":8,"y":13,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":10,"y":13,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":10,"y":9,"c":"#a52a2a"},{"x":10,"y":11,"c":"#ff0000"},{"x":11,"y":11,"c":"#ff0000"},{"x":13,"y":13,"c":"#ff0000"},{"x":13,"y":14,"c":"#ff0000"},{"x":12,"y":14,"c":"#ff0000"},{"x":9,"y":10,"c":"#ff0000"},{"x":6,"y":11,"c":"#a52a2a"},{"x":5,"y":9,"c":"#a52a2a"},{"x":4,"y":10,"c":"#a52a2a"},{"x":5,"y":10,"c":"#a52a2a"},{"x":4,"y":9,"c":"#a52a2a"},{"x":5,"y":13,"c":"#ff0000"},{"x":2,"y":11,"c":"#ffa500"},{"x":3,"y":12,"c":"#ffa500"},{"x":2,"y":12,"c":"#ffa500"},{"x":5,"y":15,"c":"#ff0000"},{"x":6,"y":15,"c":"#ff0000"},{"x":7,"y":15,"c":"#ff0000"},{"x":8,"y":14,"c":"#ff0000"},{"x":14,"y":4,"c":"#a52a2a"},{"x":14,"y":5,"c":"#a52a2a"},{"x":15,"y":5,"c":"#a52a2a"},{"x":16,"y":6,"c":"#a52a2a"},{"x":16,"y":5,"c":"#a52a2a"},{"x":15,"y":4,"c":"#a52a2a"},{"x":16,"y":4,"c":"#a52a2a"},{"x":14,"y":2,"c":"#ffa500"},{"x":15,"y":2,"c":"#ffa500"},{"x":15,"y":3,"c":"#ffa500"},{"x":16,"y":3,"c":"#ffa500"},{"x":16,"y":2,"c":"#ffa500"},{"x":14,"y":1,"c":"#ffa500"},{"x":15,"y":1,"c":"#ffa500"},{"x":16,"y":1,"c":"#ffa500"},{"x":15,"y":7,"c":"#a52a2a"},{"x":14,"y":8,"c":"#a52a2a"},{"x":13,"y":9,"c":"#a52a2a"},{"x":12,"y":9,"c":"#ff0000"},{"x":13,"y":10,"c":"#ff0000"},{"x":13,"y":11,"c":"#ff0000"},{"x":14,"y":12,"c":"#ff0000"},{"x":14,"y":13,"c":"#ff0000"},{"x":14,"y":14,"c":"#ff0000"},{"x":15,"y":12,"c":"#a52a2a"},{"x":15,"y":13,"c":"#a52a2a"},{"x":15,"y":14,"c":"#a52a2a"},{"x":16,"y":14,"c":"#a52a2a"},{"x":16,"y":13,"c":"#a52a2a"},{"x":16,"y":12,"c":"#a52a2a"},{"x":16,"y":11,"c":"#a52a2a"},{"x":16,"y":10,"c":"#a52a2a"},{"x":13,"y":12,"c":"#ffa500"},{"x":12,"y":10,"c":"#a52a2a"},{"x":10,"y":10,"c":"#a52a2a"},{"x":9,"y":9,"c":"#a52a2a"},{"x":8,"y":10,"c":"#a52a2a"},{"x":8,"y":11,"c":"#a52a2a"},{"x":9,"y":11,"c":"#ff0000"},{"x":10,"y":12,"c":"#ffa500"},{"x":12,"y":11,"c":"#ff0000"},{"x":3,"y":9,"c":"#a52a2a"},{"x":2,"y":10,"c":"#a52a2a"},{"x":3,"y":10,"c":"#a52a2a"},{"x":4,"y":11,"c":"#a52a2a"},{"x":5,"y":11,"c":"#a52a2a"},{"x":3,"y":11,"c":"#a52a2a"},{"x":7,"y":12,"c":"#a52a2a"},{"x":2,"y":13,"c":"#ffa500"},{"x":1,"y":12,"c":"#ffa500"},{"x":1,"y":11,"c":"#ffa500"},{"x":4,"y":13,"c":"#a52a2a"},{"x":3,"y":14,"c":"#a52a2a"},{"x":2,"y":15,"c":"#a52a2a"},{"x":2,"y":16,"c":"#a52a2a"},{"x":3,"y":15,"c":"#a52a2a"},{"x":4,"y":15,"c":"#a52a2a"},{"x":4,"y":14,"c":"#a52a2a"},{"x":5,"y":14,"c":"#a52a2a"},{"x":5,"y":12,"c":"#ff0000"},{"x":5,"y":16,"c":"#ff0000"},{"x":6,"y":16,"c":"#ff0000"},{"x":7,"y":16,"c":"#ff0000"},{"x":8,"y":16,"c":"#ff0000"},{"x":8,"y":15,"c":"#ff0000"},{"x":9,"y":15,"c":"#ff0000"},{"x":10,"y":15,"c":"#ff0000"},{"x":11,"y":15,"c":"#ff0000"}]);
		this.frameStop = new Pixels([{"x":11,"y":9,"c":"#a52a2a"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":5,"y":7,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":11,"y":10,"c":"#a52a2a"},{"x":6,"y":12,"c":"#ff0000"},{"x":8,"y":12,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":8,"y":13,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":10,"y":13,"c":"#ff0000"},{"x":13,"y":9,"c":"#a52a2a"},{"x":12,"y":10,"c":"#a52a2a"},{"x":10,"y":10,"c":"#a52a2a"},{"x":8,"y":10,"c":"#a52a2a"},{"x":8,"y":11,"c":"#a52a2a"},{"x":5,"y":12,"c":"#ff0000"},{"x":5,"y":5,"c":"#ffa500"},{"x":5,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#a52a2a"},{"x":11,"y":4,"c":"#ffa500"},{"x":11,"y":5,"c":"#ffa500"},{"x":13,"y":6,"c":"#ffa500"},{"x":11,"y":7,"c":"#ffa500"},{"x":11,"y":6,"c":"#a52a2a"},{"x":5,"y":4,"c":"#a52a2a"},{"x":4,"y":4,"c":"#a52a2a"},{"x":4,"y":5,"c":"#a52a2a"},{"x":4,"y":6,"c":"#a52a2a"},{"x":3,"y":4,"c":"#a52a2a"},{"x":4,"y":3,"c":"#a52a2a"},{"x":5,"y":3,"c":"#ff0000"},{"x":6,"y":2,"c":"#ff0000"},{"x":3,"y":5,"c":"#ffa500"},{"x":2,"y":5,"c":"#ffa500"},{"x":2,"y":6,"c":"#ffa500"},{"x":3,"y":6,"c":"#ffa500"},{"x":3,"y":7,"c":"#ffa500"},{"x":4,"y":7,"c":"#ffa500"},{"x":6,"y":7,"c":"#ffa500"},{"x":4,"y":8,"c":"#ff0000"},{"x":5,"y":8,"c":"#ff0000"},{"x":6,"y":8,"c":"#ff0000"},{"x":7,"y":8,"c":"#a52a2a"},{"x":8,"y":8,"c":"#a52a2a"},{"x":9,"y":8,"c":"#a52a2a"},{"x":10,"y":8,"c":"#ff0000"},{"x":10,"y":9,"c":"#ff0000"},{"x":9,"y":9,"c":"#ff0000"},{"x":8,"y":9,"c":"#a52a2a"},{"x":9,"y":10,"c":"#a52a2a"},{"x":12,"y":9,"c":"#a52a2a"},{"x":13,"y":10,"c":"#a52a2a"},{"x":13,"y":11,"c":"#a52a2a"},{"x":12,"y":11,"c":"#a52a2a"},{"x":12,"y":12,"c":"#a52a2a"},{"x":10,"y":12,"c":"#a52a2a"},{"x":11,"y":12,"c":"#a52a2a"},{"x":9,"y":12,"c":"#a52a2a"},{"x":10,"y":11,"c":"#a52a2a"},{"x":9,"y":11,"c":"#a52a2a"},{"x":11,"y":11,"c":"#a52a2a"},{"x":6,"y":9,"c":"#ffa500"},{"x":5,"y":9,"c":"#ffa500"},{"x":5,"y":10,"c":"#ffa500"},{"x":6,"y":10,"c":"#ffa500"},{"x":6,"y":11,"c":"#ffa500"},{"x":7,"y":11,"c":"#ffa500"},{"x":7,"y":9,"c":"#ffa500"},{"x":7,"y":10,"c":"#ffa500"},{"x":4,"y":9,"c":"#ff0000"},{"x":3,"y":9,"c":"#ff0000"},{"x":3,"y":10,"c":"#ff0000"},{"x":3,"y":11,"c":"#ff0000"},{"x":4,"y":11,"c":"#ff0000"},{"x":5,"y":11,"c":"#ff0000"},{"x":4,"y":10,"c":"#a52a2a"},{"x":4,"y":12,"c":"#ff0000"},{"x":4,"y":13,"c":"#ff0000"},{"x":5,"y":13,"c":"#a52a2a"},{"x":5,"y":14,"c":"#a52a2a"},{"x":6,"y":14,"c":"#a52a2a"},{"x":6,"y":13,"c":"#a52a2a"},{"x":7,"y":12,"c":"#ff0000"},{"x":7,"y":13,"c":"#a52a2a"},{"x":8,"y":14,"c":"#a52a2a"},{"x":7,"y":14,"c":"#a52a2a"},{"x":9,"y":15,"c":"#a52a2a"},{"x":8,"y":15,"c":"#a52a2a"},{"x":7,"y":15,"c":"#a52a2a"},{"x":10,"y":15,"c":"#ff0000"},{"x":7,"y":16,"c":"#ff0000"},{"x":6,"y":15,"c":"#ff0000"},{"x":5,"y":15,"c":"#ff0000"},{"x":4,"y":15,"c":"#a52a2a"},{"x":4,"y":16,"c":"#a52a2a"},{"x":5,"y":16,"c":"#a52a2a"},{"x":6,"y":16,"c":"#a52a2a"},{"x":6,"y":17,"c":"#a52a2a"},{"x":5,"y":17,"c":"#a52a2a"},{"x":4,"y":17,"c":"#a52a2a"},{"x":3,"y":17,"c":"#a52a2a"},{"x":3,"y":16,"c":"#a52a2a"},{"x":2,"y":16,"c":"#a52a2a"},{"x":2,"y":15,"c":"#a52a2a"}]);
		this.frames = {'walk1':this.frameWalk1, 'walk2':this.frameWalk2, 'walk3':this.frameWalk3,
					   'rest':this.frameRest, 'jump':this.frameJump, 'stop':this.frameStop};
		this.frameCurrent = this.frames['rest'];
		this.count = 0;
		this.lastDirection = 1;
	}
	
	updateFrames(){
		// REST FRAME
		if (Math.abs(this.force.v.x) <= .5 && Math.abs(this.force.v.y) <= .5 && this.force.ground){ this.rest(); }
		// WALK ON RIGHT
		else if (this.force.v.x > 0 && this.force.ground) { this.walk(1); }
		// WALK ON LEFT
		else if (this.force.v.x < 0 && this.force.ground) { this.walk(-1); }
		// JUMP FRAME
		else if(!this.force.ground){ this.jump(); }
	}
	
	walk(direction){
		if (this.lastDirection != direction){ 
			this.framesFlip(); 
			this.lastDirection = direction;
		}
		this.count++;
		let walk = [this.frames['walk1'], this.frames['walk2'], this.frames['walk3']];
		if (this.count >= walk.length){
			this.count = 0;
		}
		this.frameCurrent = walk[this.count];
	}
	
	jump(){
		this.frameCurrent = this.frames['jump'];
	}
		
	framesFlip(){
		for(let f of Object.values(this.frames)){
			f.polygons.positionMult(-1, 1);
		}
	}
	
}
