/* --------------------------------------------------------- */

class Edges {

	constructor(edges){
		this.edges = edges;
		this.color = 'black';
	}

	edgeDraw(canvas, e, color, s){
		ctx = canvas.getContext('2d');
		ctx.strokeStyle = color;
		ctx.lineWidth = s;
		ctx.beginPath();
		ctx.moveTo(e.a.x, e.a.y);
		ctx.lineTo(e.b.x, e.b.y);
		ctx.stroke();
		ctx.fillStyle = color;
		ctx.fillRect(e.n.x, e.n.y, s, s);
	}

	draw(canvas, color, s){
		for (let e of this.edges){
			this.edgeDraw(canvas, e, color, s)
		}
	}

	edgeSame(e1, e2){
		let bool = false;
		if (e1.a.x+e1.b.x == e2.a.x+e2.b.x && e1.a.y+e1.b.y == e2.a.y+e2.b.y){
			bool = true;
		}
		return bool;
	}

	edgeDiffPoint(p, e){
		let point = false;
		if (p.x == e.a.x && p.y == e.a.y ){
			point = e.b;
		}
		else if (p.x == e.b.x && p.y == e.b.y ){
			point = e.a;
		}
		return point;
	}

	removeDuplicates(){
		let edges = [];
		// MAKE A COPY
		let copy = this.edges.slice();
		while(copy.length>0){
			// TAKE THE FIRST ONE
			let test = [copy[0]];
			copy.shift();
			// GET DUPLICATES INDEXS
			let remove = [];
			for (let i=0; i<copy.length; i++){
				if (this.edgeSame(test[0], copy[i])){
					remove.push(i);
				}
			}
			if (remove.length>0){
				// REMOVE ELEMENTS IF IS DUPLICATES
				remove.sort(function(a, b) { return a - b }).reverse();
				for (let i=0; i<remove.length; i++){ copy.splice(remove[i],1); }
			}
			else {
				edges.push(test[0]);
			}
		} 
		this.edges = edges;
	}

	//--------------------------------- BETA TEST

	toPolygon(){ 
		// REMOVE ALL DUPLICATES AND ORIGINALS OF DUPLICATE
		this.removeDuplicates();
		let list = [];
		// MAKE A COPY
		let copy = this.edges.slice();
		while(copy.length > 0){	
			// TAKE THE FIRST EDGE POINT
			let points = [copy[0].a];
			let normals = [copy[0].n];
			// REMOVE THE FIRST ONE
			copy.shift;
			let olen = 0;
			while(olen != points.length){
				// KEEP OLD LENGTH
				olen = points.length;
				// SEARCH TEST POINT IF IN EDGE
				let remove = [];
				for (let i=0; i<copy.length; i++){
					let test = points[points.length-1];
					let p = this.edgeDiffPoint(test, copy[i]);
					if (p){
						points.push(p);
						remove.push(i);
						normals.push(copy[i].n);
					}
				}
				// REMOVE PUSHED ELEMENTS
				remove.sort(function(a, b) { return a - b }).reverse();
				for (let i=0; i<remove.length; i++){ copy.splice(remove[i],1); }
			}
			// PUSH
			points.pop();
			// ANALAYSE POLYGON TYPE (HOLE OR POLY)
			let b1 = new Vectors(points).boundingBox();
			let b2 = new Vectors(normals).boundingBox();
			let type = 0;
			if (b1.width<b2.width && b1.height<b2.height){
				type = 1;
			}
			let polygon = {points:points, color:this.color, normals:normals, type:type};
			list.push(polygon);
		}
		// TRI POLYGON AND HOLE
		let polygon;
		let holes = [];
		for (let poly of list){
			if (poly.type == 0){
				polygon = poly;
			}
			else {
				holes.push(poly);
			}
		}
		polygon.holes = holes;
		return polygon;
	}


}
