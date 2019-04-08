/* --------------------------------------------------------- */
class Vectors {
	
	constructor(points){
		this.points = points;
		this.length = this.points.length;
	}
	
	push() {
		let list = [];
		for(let p of this.points){
			list.push({x:p[0], y:p[1], c:p[2]});
		}
		this.points = list;
	}
	
	centerPosition(x, y){
		let c = this.boundingBox().center;
		for (let p of this.points){
			p.x = p.x-c.x+x;
			p.y = p.y-c.y+y;
		}
	}
	
	scale(n){
		for (let p of this.points){
			p.x = p.x*n;
			p.y = p.y*n;
		}
	}

	boundingBox(){
		let minX = this.points[0].x, maxX = this.points[0].x;
		let minY = this.points[0].y, maxY = this.points[0].y;
		for (let i = 1; i < this.points.length; i++) {
			let v = this.points[i];
			minX = (v.x < minX) ? v.x : minX;
			maxX = (v.x > maxX) ? v.x : maxX;
			minY = (v.y < minY) ? v.y : minY;
			maxY = (v.y > maxY) ? v.y : maxY;
		}
		let width = maxX-minX, height = maxY-minY;
		let points = [{x:minX, y:minY}, {x:maxX, y:minY}, {x:maxX, y:maxY}, {x:minX, y:maxY}];
		let center = {x:(minX+maxX)/2, y:(minY+maxY)/2}
		return {minX:minX, maxX:maxX, minY:minY, maxY:maxY, 
				points:points, width:width, height:height, center:center};
	}
}

/* --------------------------------------------------------- */