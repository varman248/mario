/* --------------------------------------------------------- */
class Pixels {
	
	constructor(points){
		this.vectors = new Vectors(points);
		this.sca = 1;
		this.polygons = new Polygons(this.toPolygons());
	}
	
	pixelDraw(canvas, x, y, color, s) {
		let ctx = canvas.getContext('2d');
		ctx.fillStyle = color;
		ctx.fillRect(Math.floor(x), Math.floor(y), s, s);
	}
	
	draw(canvas, polygon){
		for (let i=0; i<this.vectors.length; i++) {
			let px = this.vectors.points[i].x;
			let py = this.vectors.points[i].y;
			let pc = this.vectors.points[i].c;;
			this.pixelDraw(canvas, px, py, pc, this.sca);
		}
	}
	
	scale(n){
		this.sca = n;
		this.vectors.scale(n);
	}

	centerPosition(x, y){
		let s = this.sca * .5
		this.vectors.centerPosition(x-s, y-s);
	}
	
	boundingBox(){
		let b = this.vectors.boundingBox();
		let minX = b.minX;
		let minY = b.minY;
		let maxX = b.maxX+this.sca;
		let maxY = b.maxY+this.sca;
		let width = maxX-minX, height = maxY-minY;
		let points = [{x:minX, y:minY}, {x:maxX, y:minY}, {x:maxX, y:maxY}, {x:minX, y:maxY}];
		let center = {x:(minX+maxX)/2, y:(minY+maxY)/2}
		return {minX:minX, maxX:maxX, minY:minY, maxY:maxY, 
				points:points, width:width, height:height, center:center};
	}

	regroupByColor(points){
		let list = [];
		// MAKE A COPY
		let pixels = points.slice();
		while (pixels.length > 0){		
			// TAKE THE FIRST
			let group = [pixels[0]];
			pixels.shift();
			// COMPARE PIXELS COLOR WITH THE FRIST ONE
			let remove = [];
			for (let i=0; i<pixels.length; i++){
				if (group[0].c == pixels[i].c){
					group.push(pixels[i]);
					remove.push(i);
				}
			}
			// REMOVE PUSHED ELEMENTS
			remove.sort(function(a, b) { return a - b }).reverse();
			for (let i=0; i<remove.length; i++){ pixels.splice(remove[i],1); }
			// PUSH GROUP TO THE LIST
			list.push(group);
		}
		return list;
	}

	toEdges(p){
		let n = {x:(p.x+p.x+this.sca)/2, y:(p.y+p.y+this.sca)/2};
		let edges = [{a:{x:p.x, y:p.y}, b:{x:p.x+this.sca, y:p.y}, n:n}, 
	    		  	 {a:{x:p.x+this.sca, y:p.y}, b:{x:p.x+this.sca, y:p.y+this.sca}, n:n}, 
				  	 {a:{x:p.x+this.sca, y:p.y+this.sca}, b:{x:p.x, y:p.y+this.sca}, n:n}, 
				  	 {a:{x:p.x, y:p.y+this.sca}, b:{x:p.x, y:p.y}, n:n}
				 	];
		return edges;
	}

	regroupByNearest(points){
		// REGROUP BY NEAREST WITHOUT DIAGONAL
		let list = [];
		let copy = points.slice();
		while(copy.length>0){	
			let group = [copy[0]];
			copy.slice();
			let cursor = 0;
			while(cursor < group.length){	
				let test = group[cursor];
				let remove = [];
				for (let i=0; i<copy.length; i++){
					if((copy[i].x == test.x && Math.abs(copy[i].y-test.y)<=this.sca) 
						|| (copy[i].y == test.y && Math.abs(copy[i].x-test.x)<=this.sca)){
						group.push(copy[i]);
						remove.push(i);
					}
				}
				// REMOVE PUSHED ELEMENTS
				remove.sort(function(a, b) { return a - b }).reverse();
				for (let i=0; i<remove.length; i++){ copy.splice(remove[i],1); }
				cursor++;
			}
			// PUSH GROUP TO LIST
			group.shift();
			list.push(group);
		}
		return list;
	}

	toPolygons(){
		let polygons = [];
		for (let group of this.regroupByColor(this.vectors.points)){		
			for (let group2 of this.regroupByNearest(group)){
				// POINT TO EDGES
				let edges = [];
				for (let p of group2){ for (let e of this.toEdges(p)){ edges.push(e); } }
				// EDGES TO POLYGONS
				let es = new Edges(edges);
				es.color = group[0].c;
				let polygon = es.toPolygon();
				polygons.push(polygon);
			}
		}
		return polygons;
	}
	
	hexToRgb(hex){
	    var c;
	    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
	        c= hex.substring(1).split('');
	        if(c.length== 3){
	            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
	        }
	        c= '0x'+c.join('');
	        return {r:(c>>16)&255, g:(c>>8)&255, b:c&255};
	    }
	    throw new Error('Bad Hex');
	}

	toImage(ctx){
		this.vectors.cornerToZero();
		let b = this.vectors.boundingBox();
		let img = ctx.createImageData(b.width*this.sca, b.height*this.sca);
		for (let p of this.vectors.points){
			let idx = 4 * (p.x+ p.y * img.width);
			let c = hexToRgb(p.c);
			for (let y=0; y<this.sca; y++){
				for (let x=0; x<this.sca; x++){
					let i = 4 * ((p.x+x) + (p.y+y) * img.width);
					img.data[i] = c.r;
					img.data[i+1] = c.g;
					img.data[i+2] = c.b;
					img.data[i+3] = 255;
				}
			}
		}
		return img;	
	}

	drawImage(ctx){
		let img = this.toImage(ctx);
		let t = new Time();
		ctx.putImageData(img, 100, 100);
		console.log(t.count()+' ms');
	}


}

/* --------------------------------------------------------- */