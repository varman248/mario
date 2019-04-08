/* --------------------------------------------------------- */
class Pixels {
	
	constructor(points){
		this.vectors = new Vectors(points);
		this.sca = 1;
	}
	
	pixelDraw(ctx, x, y, color, s) {
		let e = 0;
		ctx.fillStyle = color;
		ctx.fillRect(x-e, y-e, s+e, s+e);
	}
	
	draw(canvas){
		let ctx = canvas.getContext('2d');
		for (let i=0; i<this.vectors.length; i++) {
			let px = this.vectors.points[i].x;
			let py = this.vectors.points[i].y;
			let pc = this.vectors.points[i].c;;
			this.pixelDraw(ctx, px, py, pc, this.sca);
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
		return {
				minX:b.minX, maxX:b.maxX+this.sca, 
				minY:b.minY, maxY:b.maxY+this.sca
			   };
	}

	pixelsEdgesList(points){
		let lst = [];
		let s = this.sca;
		for (let p of points){
			let n = {x:(p.x+p.x+this.sca)/2, y:(p.y+p.y+this.sca)/2};
			lst.push([{a:{x:p.x, y:p.y}, b:{x:p.x+s, y:p.y}, n:n}, 
	        		  {a:{x:p.x+s, y:p.y}, b:{x:p.x+s, y:p.y+s}, n:n}, 
					  {a:{x:p.x+s, y:p.y+s}, b:{x:p.x, y:p.y+s}, n:n}, 
					  {a:{x:p.x, y:p.y+s}, b:{x:p.x, y:p.y}, n:n}
					 ]);
		}
		return lst;
	}

	removeFromIndex(list_index, arr){
		list_index.sort(function(a, b) { return a - b }).reverse();
		for (let i=0; i<list_index.length; i++){ arr.splice(list_index[i],1); }
	}

	pixelsToPolygonsList(){ //------------------ MAIN 
		let pixelsListByColor = [];
		let points = this.vectors.points.slice();
		while(points.length > 0){	
			let test = points[0];
			points.shift();
			let list = [test];
			let remove = [];
			for (let i=0; i<points.length; i++){
				if (points[i].c == test.c) {
					list.push(points[i]);
					remove.push(i);
				}
			}
			this.removeFromIndex(remove, points);
			pixelsListByColor.push(list);
		}

		//for (let lst of pixelsListByColor){
			let lst = pixelsListByColor[0];
			let color = rdmColor(100);
			let edges_list = new EdgesList(this.pixelsEdgesList(lst));
			let polygons = edges_list.toPolygons(); //------------------------ HERE

			// for (let i=0; i<polygons.length; i++){
			// 	polygonDraw(polygons[i], color);
			// }
		//}

	}
	
}
/* --------------------------------------------------------- */

class EdgesList {

	constructor(edgesList){
		this.edgesList = edgesList;
	}
	
	removeFromIndex(list_index, arr){
		list_index.sort(function(a, b) { return a - b }).reverse();
		for (let i=0; i<list_index.length; i++){ arr.splice(list_index[i],1); }
	}
	
	edgeSame(e1, e2){
		let bool = false;
		if (e1.a.x+e1.b.x == e2.a.x+e2.b.x && e1.a.y+e1.b.y == e2.a.y+e2.b.y){
			bool = true;
		}
		return bool;
	}

	edgesSame(es1, es2){
		let bool = false;
		for (let e of es1){
			if (this.edgeInList(e, es2)){
				bool = true;
				break;
			}
		}
		return bool;
	}
	
	edgeInList(edge, list){
		let bool = false;
		for (let e of list){
			if(this.edgeSame(edge, e)){
				bool = true;
				break;
			}
		}
		return bool;
	}

	edgesRegroup(list_edges){
		let list = [];
		while(list_edges.length != 0){
			let group = [list_edges[0]];
			let cursor = 0;
			let cubeTest = group[cursor];
			list_edges.shift();
			do {
				let remove = [];
				for (let i=0; i<list_edges.length; i++){
					let cube = list_edges[i];
					if(this.edgesSame(cube, cubeTest)){
						group.push(cube);
						remove.push(i);
					}
				}
				this.removeFromIndex(remove, list_edges);
				cursor++;
				cubeTest = group[cursor];
			}
			while(cursor != group.length);
			list.push(group);
		}
		return list;
	}

	edgesMerge(es){ // (list)
		let edges = es.slice(); //------------------ MOD
		// FLATTEN 
		// let edges = [];
		// for (let es of list){ for (let e of es){ edges.push(e); } }

		let remove = [];
		for (let i=0; i<edges.length; i++){
			for (let u=i+1; u<edges.length; u++){
				if (this.edgeSame(edges[i], edges[u])){
					remove.push(i);
					remove.push(u);
				}
			}
		}
		this.removeFromIndex(remove, edges);

		return edges;
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

	edgesToPolygon(edges){ //------------- NEED FIX
		//------ TEST DRAW EDGE AND NORMALS
		for(let e of edges){ 
			let color = rdmColor(100);
			this.drawEdge(e, color, 5);
			pixelDraw(ctx, e.n.x, e.n.y, color, 5); 
		}
		//------
		let es = edges.slice();
		let polygon = [es[0].a];
		let point = polygon[0];	
		es.shift();
		while(es.length>0){
			let remove = [];
			for (let i=0; i<es.length; i++){
				let testPoint = this.edgeDiffPoint(point, es[i]);
				if (testPoint){
				 	point = testPoint;
				 	remove.push(i);
				 	break;
				}
			}
			this.removeFromIndex(remove, es);
			polygon.push(point);
		}
		return polygon;
	}

	drawEdge(e, color, width){
		ctx.strokeStyle = color;
		ctx.lineWidth = width;
		ctx.beginPath();
		ctx.moveTo(e.a.x, e.a.y);
		ctx.lineTo(e.b.x, e.b.y);
		ctx.stroke();
	}

	toPolygons(){ // ------------ FINAL
		let polygons = [];
		let list = this.edgesRegroup(this.edgesList);
		console.log(JSON.stringify(list));
		//------
		for (let group of list){
			//------- TEST
			let color = rdmColor(100);
			 for (let edges of group){ 
			let es = this.edgesMerge(edges);
			let polys = this.edgesToPolygon(es);
			for (let polygon of polys) { polygons.push(polygon); }
			}
		}
		for (let poly of polygons){
			let color = rdmColor(100);
			polygonDraw(poly, color);
		}

			//-------
		return polygons;
	}

}













/* --------------------------------------------------------- */
function polygonDraw(points, color){
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(points[0].x, points[0].y);
	for (let p of points.slice(1)){ ctx.lineTo(p.x, p.y); }
	ctx.closePath();
	ctx.fill();
}

function rdm(n){
	return Math.floor(Math.random()*n);
}
	
function rdmColor(n){
	let r = n + Math.floor(Math.random()*(255-n);
	let g = n + Math.floor(Math.random()*(255-n);
	let b = n + Math.floor(Math.random()*(255-n);
	return 'rgb('+r+','+g+','+b+')';
}

function pixelDraw(ctx, x, y, color, s) {
	let e = 0;
	ctx.fillStyle = color;
	ctx.fillRect(x-e, y-e, s+e, s+e);
}
/* --------------------------------------------------------- */

/* --------------------------------------------------------- */

var canvas = $('canvas')[0];
ctx = canvas.getContext('2d');

//let points = [{"x":8,"y":9,"c":"#ff0000"},{"x":8,"y":10,"c":"#ff0000"},{"x":9,"y":10,"c":"#ff0000"},{"x":9,"y":9,"c":"#ff0000"},{"x":10,"y":8,"c":"#ff0000"},{"x":8,"y":8,"c":"#009fff"},{"x":9,"y":8,"c":"#009fff"}];
let points = [{"x":7,"y":10,"c":"#ff0000"},{"x":7,"y":9,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":9,"y":9,"c":"#ff0000"},{"x":9,"y":10,"c":"#ff0000"},{"x":9,"y":11,"c":"#ff0000"},{"x":8,"y":11,"c":"#ff0000"},{"x":7,"y":11,"c":"#ff0000"},{"x":8,"y":10,"c":"#f1ff00"},{"x":10,"y":8,"c":"#ff0000"}];
let pixels = new Pixels(points);
pixels.scale(100);
pixels.centerPosition(250, 250);

pixels.pixelsToPolygonsList();
// for (let polygons of pixels.pixelsToPolygonsList()){
// 	let color = rdmColor(100);
// 	for (let polygon of polygons){
// 		polygonDraw(polygon, color);
// 	}
// }








