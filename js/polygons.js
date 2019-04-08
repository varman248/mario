class Polygons {

	constructor(polygons){
		this.polygons = polygons;
		this.bound = this.boundingBox();
	}

	copy(){
		let copy = new Polygons(this.polygons);
		return copy;
	}

	setBound(){
		this.bound = this.boundingBox();
	}

	inCanvas(canvas){
		let bool = false;
		for (let p of this.bound.points){
			if (p.x >= 0 && p.y >= 0 && p.x <= canvas.width && p.x <= canvas.height){
				bool = true;
				break;
			}
		}
		return bool;
	}

	draw(canvas, edges=false){
		let list = [];
		for (let poly of this.polygons){
			let group = [poly];
			let holes = poly.holes; 
			if (holes.length>0){
				for (let poly of holes){
					group.push(poly);
				}
			}
			list.push(group);
		}
		ctx = canvas.getContext('2d');
		for (let polygons of list){		
			ctx.beginPath();
			for (let polygon of polygons){
				ctx.moveTo(Math.floor(polygon.points[0].x), Math.floor(polygon.points[0].y));
				for (let p of polygon.points.slice(1)){ ctx.lineTo(Math.floor(p.x), Math.floor(p.y)); }
				ctx.closePath();
			}
			ctx.fillStyle = polygons[0].color;
			ctx.fill('evenodd');
			if (edges){
				ctx.strokeStyle = 'lime';
				ctx.strokeWidth = 2;
				ctx.stroke();
			}
		}
	}

	boundingBox(){
		let points = [];
		for(let polygon of this.polygons){
			for(let p of polygon.points){
				points.push(p);
			}
		}
		let v = new Vectors(points);
		return v.boundingBox();
	}

	centerPosition(x, y){
		let c = this.boundingBox().center;
		for(let polygon of this.polygons){		
			for (let p of polygon.points){
				p.x = p.x-c.x+x; 
				p.y = p.y-c.y+y;
			}
			if (polygon.holes.length>0){
				for (let hole of polygon.holes){
					for (let p of hole.points){
						p.x = p.x-c.x+x; 
						p.y = p.y-c.y+y;
					}
				}
			}
		}
	}

	positionMult(nx, ny){
		for(let polygon of this.polygons){		
			for (let p of polygon.points){
				p.x = p.x*nx; 
				p.y = p.y*ny;
			}
			if (polygon.holes.length>0){
				for (let hole of polygon.holes){
					for (let p of hole.points){
						p.x = p.x*nx; 
						p.y = p.y*ny;
					}
				}
			}
		}
	}

	positionAdd(nx, ny){
		for(let polygon of this.polygons){		
			for (let p of polygon.points){
				p.x = p.x+nx; 
				p.y = p.y+ny;
			}
			if (polygon.holes.length>0){
				for (let hole of polygon.holes){
					for (let p of hole.points){
						p.x = p.x+nx; 
						p.y = p.y+ny;
					}
				}
			}
		}
	}

	scale(n){
		for(let polygon of this.polygons){		
			for (let p of polygon.points){
				p.x *= n; 
				p.y *= n;
			}
			if (polygon.holes.length>0){
				for (let hole of polygon.holes){
					for (let p of hole.points){
						p.x *= n; 
						p.y *= n;
					}
				}
			}
		}
	}
}
