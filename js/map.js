
class Map {

	constructor(canvas, width, height, color){
		this.width = width;
		this.height = height;
		this.elements = [];
		this.bkgColor = color;
		this.generateRects();
		this.elements.push({x:0, y:350, w:this.width, h:100, c:'#795548'});
	}	

	offset(p){
		for (let rect of this.elements){
			rect.x += p.x; 
			rect.y += p.y; 
		}
	}

	generateRects(){
		for (let i=0; i<this.width/8; i++){
			let c = this.rdmColor(70, 150);
			let s = this.rdm(10, 70);
			let x = this.rdm(0, this.width);
			let y = this.rdm(100, this.height);
			let rect = {x:x, y:y, w:s, h:s, c:c};
			this.elements.push(rect);
		}
	}

	rdm(min, max){
		return min + Math.floor(Math.random()*(max-min));
	}

	rdmColor(min, max){
		let r = this.rdm(max, min);
		let g = this.rdm(max, min);
		let b = this.rdm(max, min);
		return 'rgb('+r+','+g+','+b+')';
	}

	groundSet(canvas){
		let list = [];
		let gb = this.ground.boundingBox();
		let gm = gb.width/2;
		for (let y=canvas.height-gb.height+gm; y<canvas.height; y+=gb.height){
			for (let x=gm; x<canvas.width+gm; x+=gb.width){
				this.ground.centerPosition(x, y);
				this.elements.push(this.ground.polygons);
				//this.ground.draw(canvas);
			}
		}

	}

	draw(canvas){
		ctx = canvas.getContext('2d');
		// DRAW ELEMENTS
		for (let rect of this.elements){
			ctx.fillStyle = rect.c;
			ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
		}
	}
}