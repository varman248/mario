/* --------------------------------------------------------- */

function rdm(n){
	return Math.floor(Math.random()*n);
}
	
function rdmColor(n){
	let r = n + rdm(255-n);
	let g = n + rdm(255-n);
	let b = n + rdm(255-n);
	return 'rgb('+r+','+g+','+b+')';
}

function pixelDraw(ctx, x, y, color, s) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, s, s);
}

/* --------------------------------------------------------- */

var canvas = $('canvas')[0];
ctx = canvas.getContext('2d');

var points = [{"x":8,"y":10,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":9,"y":9,"c":"#ff0000"},{"x":10,"y":9,"c":"#ff0000"},{"x":10,"y":10,"c":"#ff0000"},{"x":10,"y":11,"c":"#ff0000"},{"x":9,"y":11,"c":"#ff0000"},{"x":8,"y":11,"c":"#ff0000"},{"x":11,"y":12,"c":"#ff0000"},{"x":9,"y":10,"c":"#00ff2c"}];

var pixels = new Pixels(points);
pixels.scale(50);
pixels.centerPosition(250, 250);
//pixels.draw(canvas);

let list = pixels.regroupByColor();

for (let group of list){
	for (let pix of group){
		pixelDraw(ctx, pix.x, pix.y, pix.c, pixels.sca);
	}
}


// var edges_list = pixels.toEdgesList(pixels.vectors.points);

// var edges = new Edges();

// // DRAW EDGES
// edgesListDraw(edges_list, 'blue', 10);
