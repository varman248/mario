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

function pixelsDraw(ctx, group, s) {
	for (let pix of group){
		pixelDraw(ctx, pix.x, pix.y, pix.c, s);
	}
}

function polygonsDraw(canvas, polygons, color){
	ctx = canvas.getContext('2d');
	ctx.beginPath();
	for (let polygon of polygons){
		ctx.moveTo(Math.floor(polygon.points[0].x), Math.floor(polygon.points[0].y));
		for (let p of polygon.points.slice(1)){ ctx.lineTo(Math.floor(p.x), Math.floor(p.y)); }
		ctx.closePath();
	}
	ctx.fillStyle = color;
	ctx.fill('evenodd');
}

function rdmColor(n){
	let r = n + Math.floor(Math.random()*(255-n));
	let g = n + Math.floor(Math.random()*(255-n));
	let b = n + Math.floor(Math.random()*(255-n));
	return 'rgb('+r+','+g+','+b+')';
}




/* --------------------------------------------------------- */

var canvas = $('canvas')[0];
ctx = canvas.getContext('2d');

//var points = [{"x":8,"y":10,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":9,"y":9,"c":"#ff0000"},{"x":10,"y":9,"c":"#ff0000"},{"x":10,"y":10,"c":"#ff0000"},{"x":10,"y":11,"c":"#ff0000"},{"x":9,"y":11,"c":"#ff0000"},{"x":8,"y":11,"c":"#ff0000"},{"x":12,"y":10,"c":"#ff0000"},{"x":9,"y":10,"c":"#57ff00"},{"x":9,"y":7,"c":"#57ff00"},{"x":11,"y":8,"c":"#ff0000"},{"x":7,"y":12,"c":"#ff0000"},{"x":10,"y":12,"c":"#ff0000"},{"x":6,"y":12,"c":"#ff0000"},{"x":6,"y":13,"c":"#ff0000"},{"x":7,"y":13,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":11,"y":12,"c":"#ff0000"},{"x":7,"y":9,"c":"#ff0000"}];
//var points = [{"x":8,"y":9,"c":"#ff0000"},{"x":9,"y":8,"c":"#ff0000"},{"x":7,"y":8,"c":"#ff0000"},{"x":7,"y":10,"c":"#ff0000"},{"x":9,"y":10,"c":"#ff0000"}];
//var points = [{"x":4,"y":17,"c":"#a52a2a"},{"x":5,"y":16,"c":"#a52a2a"},{"x":7,"y":16,"c":"#a52a2a"},{"x":6,"y":16,"c":"#a52a2a"},{"x":5,"y":17,"c":"#a52a2a"},{"x":6,"y":17,"c":"#a52a2a"},{"x":7,"y":17,"c":"#a52a2a"},{"x":7,"y":15,"c":"#ff0000"},{"x":6,"y":15,"c":"#ff0000"},{"x":6,"y":14,"c":"#ff0000"},{"x":8,"y":14,"c":"#ff0000"},{"x":7,"y":14,"c":"#ff0000"},{"x":8,"y":15,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":11,"y":15,"c":"#ff0000"},{"x":12,"y":15,"c":"#ff0000"},{"x":12,"y":14,"c":"#ff0000"},{"x":13,"y":15,"c":"#ff0000"},{"x":13,"y":14,"c":"#ff0000"},{"x":12,"y":16,"c":"#a52a2a"},{"x":12,"y":17,"c":"#a52a2a"},{"x":13,"y":17,"c":"#a52a2a"},{"x":13,"y":16,"c":"#a52a2a"},{"x":14,"y":17,"c":"#a52a2a"},{"x":14,"y":16,"c":"#a52a2a"},{"x":15,"y":17,"c":"#a52a2a"},{"x":7,"y":13,"c":"#ff0000"},{"x":7,"y":12,"c":"#ff0000"},{"x":8,"y":13,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":10,"y":12,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":10,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":12,"y":12,"c":"#ff0000"},{"x":12,"y":13,"c":"#ff0000"},{"x":8,"y":11,"c":"#ff0000"},{"x":8,"y":10,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":10,"y":11,"c":"#ff0000"},{"x":9,"y":11,"c":"#ff0000"},{"x":11,"y":11,"c":"#ff0000"},{"x":11,"y":10,"c":"#ff0000"},{"x":6,"y":12,"c":"#a52a2a"},{"x":7,"y":11,"c":"#a52a2a"},{"x":6,"y":11,"c":"#a52a2a"},{"x":7,"y":10,"c":"#a52a2a"},{"x":6,"y":9,"c":"#a52a2a"},{"x":7,"y":9,"c":"#a52a2a"},{"x":6,"y":10,"c":"#a52a2a"},{"x":5,"y":10,"c":"#a52a2a"},{"x":5,"y":11,"c":"#a52a2a"},{"x":4,"y":11,"c":"#a52a2a"},{"x":9,"y":10,"c":"#a52a2a"},{"x":10,"y":10,"c":"#a52a2a"},{"x":9,"y":9,"c":"#a52a2a"},{"x":10,"y":9,"c":"#a52a2a"},{"x":11,"y":9,"c":"#a52a2a"},{"x":12,"y":10,"c":"#a52a2a"},{"x":12,"y":11,"c":"#a52a2a"},{"x":13,"y":10,"c":"#a52a2a"},{"x":13,"y":11,"c":"#a52a2a"},{"x":6,"y":13,"c":"#ffa500"},{"x":5,"y":13,"c":"#ffa500"},{"x":5,"y":12,"c":"#ffa500"},{"x":4,"y":12,"c":"#ffa500"},{"x":4,"y":13,"c":"#ffa500"},{"x":4,"y":14,"c":"#ffa500"},{"x":5,"y":14,"c":"#ffa500"},{"x":13,"y":13,"c":"#ffa500"},{"x":15,"y":14,"c":"#ffa500"},{"x":14,"y":14,"c":"#ffa500"},{"x":14,"y":13,"c":"#ffa500"},{"x":15,"y":13,"c":"#ffa500"},{"x":15,"y":12,"c":"#ffa500"},{"x":14,"y":12,"c":"#ffa500"},{"x":13,"y":12,"c":"#a52a2a"},{"x":11,"y":12,"c":"#ffa500"},{"x":8,"y":12,"c":"#ffa500"},{"x":14,"y":11,"c":"#a52a2a"},{"x":15,"y":11,"c":"#a52a2a"},{"x":14,"y":10,"c":"#a52a2a"},{"x":7,"y":8,"c":"#ffa500"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":8,"c":"#ffa500"},{"x":8,"y":8,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":10,"y":8,"c":"#ffa500"},{"x":6,"y":7,"c":"#a52a2a"},{"x":5,"y":7,"c":"#a52a2a"},{"x":5,"y":6,"c":"#a52a2a"},{"x":5,"y":5,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":11,"y":7,"c":"#a52a2a"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":13,"y":8,"c":"#ffa500"},{"x":14,"y":7,"c":"#a52a2a"},{"x":13,"y":6,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":15,"y":6,"c":"#ffa500"},{"x":14,"y":5,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":11,"y":6,"c":"#ffa500"},{"x":11,"y":5,"c":"#a52a2a"},{"x":11,"y":4,"c":"#a52a2a"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":13,"y":3,"c":"#ff0000"},{"x":14,"y":3,"c":"#ff0000"},{"x":12,"y":4,"c":"#ffa500"}]
var points = [{"x":4,"y":17,"c":"#a52a2a"},{"x":5,"y":16,"c":"#a52a2a"},{"x":7,"y":16,"c":"#a52a2a"},{"x":6,"y":16,"c":"#a52a2a"},{"x":5,"y":17,"c":"#a52a2a"},{"x":6,"y":17,"c":"#a52a2a"},{"x":7,"y":17,"c":"#a52a2a"},{"x":7,"y":15,"c":"#ff0000"},{"x":6,"y":15,"c":"#ff0000"},{"x":6,"y":14,"c":"#ff0000"},{"x":8,"y":14,"c":"#ff0000"},{"x":7,"y":14,"c":"#ff0000"},{"x":8,"y":15,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":11,"y":15,"c":"#ff0000"},{"x":12,"y":15,"c":"#ff0000"},{"x":12,"y":14,"c":"#ff0000"},{"x":13,"y":15,"c":"#ff0000"},{"x":13,"y":14,"c":"#ff0000"},{"x":12,"y":16,"c":"#a52a2a"},{"x":12,"y":17,"c":"#a52a2a"},{"x":13,"y":17,"c":"#a52a2a"},{"x":13,"y":16,"c":"#a52a2a"},{"x":14,"y":17,"c":"#a52a2a"},{"x":14,"y":16,"c":"#a52a2a"},{"x":15,"y":17,"c":"#a52a2a"},{"x":7,"y":13,"c":"#ff0000"},{"x":7,"y":12,"c":"#ff0000"},{"x":8,"y":13,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":10,"y":12,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":10,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":12,"y":12,"c":"#ff0000"},{"x":12,"y":13,"c":"#ff0000"},{"x":8,"y":11,"c":"#ff0000"},{"x":8,"y":10,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":10,"y":11,"c":"#ff0000"},{"x":9,"y":11,"c":"#ff0000"},{"x":11,"y":11,"c":"#ff0000"},{"x":11,"y":10,"c":"#ff0000"},{"x":6,"y":12,"c":"#a52a2a"},{"x":7,"y":11,"c":"#a52a2a"},{"x":6,"y":11,"c":"#a52a2a"},{"x":7,"y":10,"c":"#a52a2a"},{"x":6,"y":9,"c":"#a52a2a"},{"x":7,"y":9,"c":"#a52a2a"},{"x":6,"y":10,"c":"#a52a2a"},{"x":5,"y":10,"c":"#a52a2a"},{"x":5,"y":11,"c":"#a52a2a"},{"x":4,"y":11,"c":"#a52a2a"},{"x":9,"y":10,"c":"#a52a2a"},{"x":10,"y":10,"c":"#a52a2a"},{"x":9,"y":9,"c":"#a52a2a"},{"x":10,"y":9,"c":"#a52a2a"},{"x":11,"y":9,"c":"#a52a2a"},{"x":12,"y":10,"c":"#a52a2a"},{"x":12,"y":11,"c":"#a52a2a"},{"x":13,"y":10,"c":"#a52a2a"},{"x":13,"y":11,"c":"#a52a2a"},{"x":6,"y":13,"c":"#ffa500"},{"x":5,"y":13,"c":"#ffa500"},{"x":5,"y":12,"c":"#ffa500"},{"x":4,"y":12,"c":"#ffa500"},{"x":4,"y":13,"c":"#ffa500"},{"x":4,"y":14,"c":"#ffa500"},{"x":5,"y":14,"c":"#ffa500"},{"x":13,"y":13,"c":"#ffa500"},{"x":15,"y":14,"c":"#ffa500"},{"x":14,"y":14,"c":"#ffa500"},{"x":14,"y":13,"c":"#ffa500"},{"x":15,"y":13,"c":"#ffa500"},{"x":15,"y":12,"c":"#ffa500"},{"x":14,"y":12,"c":"#ffa500"},{"x":13,"y":12,"c":"#a52a2a"},{"x":11,"y":12,"c":"#ffa500"},{"x":8,"y":12,"c":"#ffa500"},{"x":14,"y":11,"c":"#a52a2a"},{"x":15,"y":11,"c":"#a52a2a"},{"x":14,"y":10,"c":"#a52a2a"},{"x":7,"y":8,"c":"#ffa500"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":8,"c":"#ffa500"},{"x":8,"y":8,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":10,"y":8,"c":"#ffa500"},{"x":6,"y":7,"c":"#a52a2a"},{"x":5,"y":7,"c":"#a52a2a"},{"x":5,"y":6,"c":"#a52a2a"},{"x":5,"y":5,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":11,"y":7,"c":"#a52a2a"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":13,"y":8,"c":"#ffa500"},{"x":14,"y":7,"c":"#a52a2a"},{"x":13,"y":6,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":15,"y":6,"c":"#ffa500"},{"x":14,"y":5,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":11,"y":6,"c":"#ffa500"},{"x":11,"y":5,"c":"#a52a2a"},{"x":11,"y":4,"c":"#a52a2a"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":13,"y":3,"c":"#ff0000"},{"x":14,"y":3,"c":"#ff0000"},{"x":12,"y":4,"c":"#ffa500"}]
// CLOUD
//var points = [{"x":2,"y":17,"c":"#000000"},{"x":2,"y":18,"c":"#000000"},{"x":3,"y":19,"c":"#000000"},{"x":4,"y":20,"c":"#000000"},{"x":5,"y":21,"c":"#000000"},{"x":6,"y":22,"c":"#000000"},{"x":6,"y":23,"c":"#000000"},{"x":7,"y":24,"c":"#000000"},{"x":8,"y":24,"c":"#000000"},{"x":9,"y":24,"c":"#000000"},{"x":10,"y":25,"c":"#000000"},{"x":11,"y":26,"c":"#000000"},{"x":12,"y":26,"c":"#000000"},{"x":13,"y":27,"c":"#000000"},{"x":14,"y":27,"c":"#000000"},{"x":15,"y":27,"c":"#000000"},{"x":16,"y":26,"c":"#000000"},{"x":17,"y":25,"c":"#000000"},{"x":18,"y":26,"c":"#000000"},{"x":19,"y":26,"c":"#000000"},{"x":20,"y":27,"c":"#000000"},{"x":21,"y":27,"c":"#000000"},{"x":22,"y":27,"c":"#000000"},{"x":23,"y":27,"c":"#000000"},{"x":24,"y":26,"c":"#000000"},{"x":25,"y":26,"c":"#000000"},{"x":26,"y":25,"c":"#000000"},{"x":27,"y":26,"c":"#000000"},{"x":28,"y":26,"c":"#000000"},{"x":30,"y":25,"c":"#000000"},{"x":32,"y":24,"c":"#000000"},{"x":32,"y":23,"c":"#000000"},{"x":33,"y":22,"c":"#000000"},{"x":32,"y":21,"c":"#000000"},{"x":31,"y":20,"c":"#000000"},{"x":32,"y":19,"c":"#000000"},{"x":33,"y":19,"c":"#000000"},{"x":33,"y":18,"c":"#000000"},{"x":33,"y":17,"c":"#000000"},{"x":33,"y":16,"c":"#000000"},{"x":32,"y":15,"c":"#000000"},{"x":31,"y":16,"c":"#000000"},{"x":30,"y":15,"c":"#000000"},{"x":30,"y":14,"c":"#000000"},{"x":30,"y":13,"c":"#000000"},{"x":29,"y":12,"c":"#000000"},{"x":28,"y":13,"c":"#000000"},{"x":27,"y":14,"c":"#000000"},{"x":26,"y":13,"c":"#000000"},{"x":26,"y":12,"c":"#000000"},{"x":25,"y":11,"c":"#000000"},{"x":25,"y":10,"c":"#000000"},{"x":25,"y":9,"c":"#000000"},{"x":24,"y":8,"c":"#000000"},{"x":23,"y":7,"c":"#000000"},{"x":22,"y":8,"c":"#000000"},{"x":21,"y":7,"c":"#000000"},{"x":21,"y":6,"c":"#000000"},{"x":20,"y":5,"c":"#000000"},{"x":19,"y":4,"c":"#000000"},{"x":18,"y":4,"c":"#000000"},{"x":17,"y":4,"c":"#000000"},{"x":16,"y":4,"c":"#000000"},{"x":15,"y":5,"c":"#000000"},{"x":14,"y":6,"c":"#000000"},{"x":13,"y":6,"c":"#000000"},{"x":12,"y":7,"c":"#000000"},{"x":12,"y":8,"c":"#000000"},{"x":12,"y":9,"c":"#000000"},{"x":11,"y":10,"c":"#000000"},{"x":10,"y":11,"c":"#000000"},{"x":9,"y":12,"c":"#000000"},{"x":8,"y":12,"c":"#000000"},{"x":7,"y":12,"c":"#000000"},{"x":6,"y":13,"c":"#000000"},{"x":5,"y":14,"c":"#000000"},{"x":4,"y":15,"c":"#000000"},{"x":3,"y":16,"c":"#000000"},{"x":4,"y":16,"c":"#000000"},{"x":16,"y":10,"c":"#0aadff"},{"x":15,"y":10,"c":"#0aadff"},{"x":14,"y":11,"c":"#0aadff"},{"x":19,"y":9,"c":"#0aadff"},{"x":20,"y":10,"c":"#0aadff"},{"x":7,"y":20,"c":"#0aadff"},{"x":8,"y":21,"c":"#0aadff"},{"x":9,"y":22,"c":"#0aadff"},{"x":10,"y":22,"c":"#0aadff"},{"x":11,"y":22,"c":"#0aadff"},{"x":11,"y":21,"c":"#0aadff"},{"x":12,"y":22,"c":"#0aadff"},{"x":12,"y":23,"c":"#0aadff"},{"x":13,"y":23,"c":"#0aadff"},{"x":14,"y":23,"c":"#0aadff"},{"x":14,"y":24,"c":"#0aadff"},{"x":15,"y":24,"c":"#0aadff"},{"x":15,"y":23,"c":"#0aadff"},{"x":16,"y":23,"c":"#0aadff"},{"x":17,"y":23,"c":"#0aadff"},{"x":16,"y":22,"c":"#0aadff"},{"x":17,"y":22,"c":"#0aadff"},{"x":18,"y":22,"c":"#0aadff"},{"x":18,"y":21,"c":"#0aadff"},{"x":19,"y":20,"c":"#0aadff"},{"x":19,"y":22,"c":"#0aadff"},{"x":19,"y":23,"c":"#0aadff"},{"x":20,"y":23,"c":"#0aadff"},{"x":20,"y":24,"c":"#0aadff"},{"x":21,"y":24,"c":"#0aadff"},{"x":22,"y":24,"c":"#0aadff"},{"x":21,"y":23,"c":"#0aadff"},{"x":22,"y":23,"c":"#0aadff"},{"x":23,"y":23,"c":"#0aadff"},{"x":24,"y":22,"c":"#0aadff"},{"x":3,"y":18,"c":"#ffffff"},{"x":3,"y":17,"c":"#ffffff"},{"x":4,"y":17,"c":"#ffffff"},{"x":4,"y":18,"c":"#ffffff"},{"x":5,"y":18,"c":"#ffffff"},{"x":5,"y":17,"c":"#ffffff"},{"x":5,"y":16,"c":"#ffffff"},{"x":5,"y":15,"c":"#ffffff"},{"x":6,"y":15,"c":"#ffffff"},{"x":6,"y":14,"c":"#ffffff"},{"x":7,"y":14,"c":"#ffffff"},{"x":7,"y":13,"c":"#ffffff"},{"x":8,"y":13,"c":"#ffffff"},{"x":8,"y":14,"c":"#ffffff"},{"x":8,"y":15,"c":"#ffffff"},{"x":7,"y":15,"c":"#ffffff"},{"x":7,"y":16,"c":"#ffffff"},{"x":6,"y":16,"c":"#ffffff"},{"x":6,"y":17,"c":"#ffffff"},{"x":6,"y":18,"c":"#ffffff"},{"x":7,"y":18,"c":"#ffffff"},{"x":7,"y":17,"c":"#ffffff"},{"x":8,"y":17,"c":"#ffffff"},{"x":8,"y":18,"c":"#ffffff"},{"x":8,"y":16,"c":"#ffffff"},{"x":9,"y":16,"c":"#ffffff"},{"x":9,"y":15,"c":"#ffffff"},{"x":9,"y":14,"c":"#ffffff"},{"x":9,"y":13,"c":"#ffffff"},{"x":10,"y":13,"c":"#ffffff"},{"x":10,"y":12,"c":"#ffffff"},{"x":11,"y":12,"c":"#ffffff"},{"x":11,"y":11,"c":"#ffffff"},{"x":12,"y":11,"c":"#ffffff"},{"x":13,"y":11,"c":"#ffffff"},{"x":13,"y":12,"c":"#ffffff"},{"x":12,"y":12,"c":"#ffffff"},{"x":12,"y":13,"c":"#ffffff"},{"x":11,"y":13,"c":"#ffffff"},{"x":11,"y":14,"c":"#ffffff"},{"x":10,"y":14,"c":"#ffffff"},{"x":10,"y":15,"c":"#ffffff"},{"x":10,"y":16,"c":"#ffffff"},{"x":9,"y":17,"c":"#ffffff"},{"x":9,"y":18,"c":"#ffffff"},{"x":10,"y":18,"c":"#ffffff"},{"x":10,"y":17,"c":"#ffffff"},{"x":11,"y":18,"c":"#ffffff"},{"x":11,"y":17,"c":"#ffffff"},{"x":11,"y":16,"c":"#ffffff"},{"x":11,"y":15,"c":"#ffffff"},{"x":12,"y":15,"c":"#ffffff"},{"x":12,"y":16,"c":"#ffffff"},{"x":12,"y":18,"c":"#ffffff"},{"x":12,"y":17,"c":"#ffffff"},{"x":12,"y":14,"c":"#ffffff"},{"x":13,"y":13,"c":"#ffffff"},{"x":13,"y":18,"c":"#ffffff"},{"x":13,"y":17,"c":"#ffffff"},{"x":13,"y":16,"c":"#ffffff"},{"x":13,"y":15,"c":"#ffffff"},{"x":13,"y":14,"c":"#ffffff"},{"x":14,"y":14,"c":"#ffffff"},{"x":14,"y":13,"c":"#ffffff"},{"x":14,"y":12,"c":"#ffffff"},{"x":14,"y":15,"c":"#ffffff"},{"x":14,"y":18,"c":"#ffffff"},{"x":14,"y":17,"c":"#ffffff"},{"x":14,"y":16,"c":"#ffffff"},{"x":12,"y":10,"c":"#ffffff"},{"x":13,"y":10,"c":"#ffffff"},{"x":14,"y":10,"c":"#ffffff"},{"x":14,"y":9,"c":"#ffffff"},{"x":13,"y":9,"c":"#ffffff"},{"x":13,"y":8,"c":"#ffffff"},{"x":14,"y":8,"c":"#ffffff"},{"x":14,"y":7,"c":"#ffffff"},{"x":13,"y":7,"c":"#ffffff"},{"x":15,"y":9,"c":"#ffffff"},{"x":16,"y":9,"c":"#ffffff"},{"x":15,"y":8,"c":"#ffffff"},{"x":16,"y":8,"c":"#ffffff"},{"x":15,"y":7,"c":"#ffffff"},{"x":16,"y":7,"c":"#ffffff"},{"x":15,"y":6,"c":"#ffffff"},{"x":16,"y":6,"c":"#ffffff"},{"x":16,"y":5,"c":"#ffffff"},{"x":15,"y":11,"c":"#ffffff"},{"x":16,"y":11,"c":"#ffffff"},{"x":16,"y":12,"c":"#ffffff"},{"x":15,"y":12,"c":"#ffffff"},{"x":15,"y":13,"c":"#ffffff"},{"x":16,"y":13,"c":"#ffffff"},{"x":16,"y":14,"c":"#ffffff"},{"x":15,"y":14,"c":"#ffffff"},{"x":15,"y":15,"c":"#ffffff"},{"x":16,"y":15,"c":"#ffffff"},{"x":16,"y":16,"c":"#ffffff"},{"x":15,"y":16,"c":"#ffffff"},{"x":15,"y":17,"c":"#ffffff"},{"x":16,"y":17,"c":"#ffffff"},{"x":16,"y":18,"c":"#ffffff"},{"x":15,"y":18,"c":"#ffffff"},{"x":4,"y":19,"c":"#ffffff"},{"x":5,"y":19,"c":"#ffffff"},{"x":6,"y":19,"c":"#ffffff"},{"x":7,"y":19,"c":"#ffffff"},{"x":8,"y":19,"c":"#ffffff"},{"x":9,"y":19,"c":"#ffffff"},{"x":10,"y":19,"c":"#ffffff"},{"x":11,"y":19,"c":"#ffffff"},{"x":13,"y":19,"c":"#ffffff"},{"x":12,"y":19,"c":"#ffffff"},{"x":14,"y":19,"c":"#ffffff"},{"x":15,"y":19,"c":"#ffffff"},{"x":16,"y":19,"c":"#ffffff"},{"x":15,"y":22,"c":"#ffffff"},{"x":14,"y":22,"c":"#ffffff"},{"x":13,"y":22,"c":"#ffffff"},{"x":13,"y":21,"c":"#ffffff"},{"x":12,"y":21,"c":"#ffffff"},{"x":12,"y":20,"c":"#ffffff"},{"x":11,"y":20,"c":"#ffffff"},{"x":10,"y":20,"c":"#ffffff"},{"x":10,"y":21,"c":"#ffffff"},{"x":9,"y":21,"c":"#ffffff"},{"x":9,"y":20,"c":"#ffffff"},{"x":8,"y":20,"c":"#ffffff"},{"x":16,"y":21,"c":"#ffffff"},{"x":17,"y":21,"c":"#ffffff"},{"x":18,"y":20,"c":"#ffffff"},{"x":17,"y":20,"c":"#ffffff"},{"x":16,"y":20,"c":"#ffffff"},{"x":15,"y":21,"c":"#ffffff"},{"x":14,"y":21,"c":"#ffffff"},{"x":14,"y":20,"c":"#ffffff"},{"x":13,"y":20,"c":"#ffffff"},{"x":15,"y":20,"c":"#ffffff"},{"x":5,"y":20,"c":"#ffffff"},{"x":6,"y":20,"c":"#ffffff"},{"x":6,"y":21,"c":"#ffffff"},{"x":7,"y":21,"c":"#ffffff"},{"x":7,"y":22,"c":"#ffffff"},{"x":7,"y":23,"c":"#ffffff"},{"x":8,"y":23,"c":"#ffffff"},{"x":8,"y":22,"c":"#ffffff"},{"x":9,"y":23,"c":"#ffffff"},{"x":10,"y":23,"c":"#ffffff"},{"x":11,"y":23,"c":"#ffffff"},{"x":18,"y":23,"c":"#ffffff"},{"x":19,"y":21,"c":"#ffffff"},{"x":20,"y":22,"c":"#ffffff"},{"x":20,"y":21,"c":"#ffffff"},{"x":20,"y":20,"c":"#ffffff"},{"x":19,"y":19,"c":"#ffffff"},{"x":20,"y":19,"c":"#ffffff"},{"x":18,"y":19,"c":"#ffffff"},{"x":17,"y":19,"c":"#ffffff"},{"x":21,"y":22,"c":"#ffffff"},{"x":22,"y":22,"c":"#ffffff"},{"x":22,"y":21,"c":"#ffffff"},{"x":21,"y":21,"c":"#ffffff"},{"x":21,"y":20,"c":"#ffffff"},{"x":22,"y":20,"c":"#ffffff"},{"x":22,"y":19,"c":"#ffffff"},{"x":21,"y":19,"c":"#ffffff"},{"x":17,"y":18,"c":"#ffffff"},{"x":17,"y":17,"c":"#ffffff"},{"x":17,"y":15,"c":"#ffffff"},{"x":17,"y":14,"c":"#ffffff"},{"x":17,"y":13,"c":"#ffffff"},{"x":17,"y":12,"c":"#ffffff"},{"x":17,"y":11,"c":"#ffffff"},{"x":17,"y":10,"c":"#ffffff"},{"x":17,"y":9,"c":"#ffffff"},{"x":17,"y":8,"c":"#ffffff"},{"x":17,"y":7,"c":"#ffffff"},{"x":17,"y":6,"c":"#ffffff"},{"x":17,"y":5,"c":"#ffffff"},{"x":17,"y":16,"c":"#ffffff"},{"x":18,"y":18,"c":"#ffffff"},{"x":18,"y":17,"c":"#ffffff"},{"x":18,"y":16,"c":"#ffffff"},{"x":18,"y":15,"c":"#ffffff"},{"x":18,"y":14,"c":"#ffffff"},{"x":18,"y":13,"c":"#ffffff"},{"x":18,"y":12,"c":"#ffffff"},{"x":18,"y":11,"c":"#ffffff"},{"x":18,"y":10,"c":"#ffffff"},{"x":18,"y":9,"c":"#ffffff"},{"x":18,"y":8,"c":"#ffffff"},{"x":18,"y":7,"c":"#ffffff"},{"x":18,"y":6,"c":"#ffffff"},{"x":18,"y":5,"c":"#ffffff"},{"x":19,"y":5,"c":"#ffffff"},{"x":19,"y":6,"c":"#ffffff"},{"x":19,"y":7,"c":"#ffffff"},{"x":19,"y":8,"c":"#ffffff"},{"x":19,"y":10,"c":"#ffffff"},{"x":19,"y":11,"c":"#ffffff"},{"x":19,"y":12,"c":"#ffffff"},{"x":19,"y":13,"c":"#ffffff"},{"x":19,"y":14,"c":"#ffffff"},{"x":19,"y":15,"c":"#ffffff"},{"x":19,"y":16,"c":"#ffffff"},{"x":19,"y":17,"c":"#ffffff"},{"x":19,"y":18,"c":"#ffffff"},{"x":20,"y":18,"c":"#ffffff"},{"x":20,"y":17,"c":"#ffffff"},{"x":20,"y":16,"c":"#ffffff"},{"x":20,"y":15,"c":"#ffffff"},{"x":20,"y":14,"c":"#ffffff"},{"x":20,"y":13,"c":"#ffffff"},{"x":20,"y":12,"c":"#ffffff"},{"x":20,"y":11,"c":"#ffffff"},{"x":20,"y":9,"c":"#ffffff"},{"x":20,"y":8,"c":"#ffffff"},{"x":20,"y":7,"c":"#ffffff"},{"x":20,"y":6,"c":"#ffffff"},{"x":21,"y":18,"c":"#ffffff"},{"x":21,"y":17,"c":"#ffffff"},{"x":21,"y":16,"c":"#ffffff"},{"x":21,"y":15,"c":"#ffffff"},{"x":21,"y":14,"c":"#ffffff"},{"x":21,"y":13,"c":"#ffffff"},{"x":21,"y":12,"c":"#ffffff"},{"x":21,"y":11,"c":"#ffffff"},{"x":21,"y":10,"c":"#ffffff"},{"x":21,"y":9,"c":"#ffffff"},{"x":21,"y":8,"c":"#ffffff"},{"x":23,"y":22,"c":"#ffffff"},{"x":23,"y":21,"c":"#ffffff"},{"x":23,"y":20,"c":"#ffffff"},{"x":23,"y":19,"c":"#ffffff"},{"x":22,"y":18,"c":"#ffffff"},{"x":23,"y":18,"c":"#ffffff"},{"x":22,"y":17,"c":"#ffffff"},{"x":23,"y":17,"c":"#ffffff"},{"x":23,"y":16,"c":"#ffffff"},{"x":22,"y":16,"c":"#ffffff"},{"x":22,"y":15,"c":"#ffffff"},{"x":23,"y":15,"c":"#ffffff"},{"x":23,"y":14,"c":"#ffffff"},{"x":22,"y":14,"c":"#ffffff"},{"x":22,"y":13,"c":"#ffffff"},{"x":23,"y":13,"c":"#ffffff"},{"x":22,"y":12,"c":"#ffffff"},{"x":23,"y":12,"c":"#ffffff"},{"x":23,"y":11,"c":"#ffffff"},{"x":22,"y":11,"c":"#ffffff"},{"x":22,"y":10,"c":"#ffffff"},{"x":23,"y":10,"c":"#ffffff"},{"x":23,"y":9,"c":"#ffffff"},{"x":22,"y":9,"c":"#ffffff"},{"x":23,"y":8,"c":"#ffffff"},{"x":24,"y":9,"c":"#ffffff"},{"x":24,"y":10,"c":"#ffffff"},{"x":24,"y":11,"c":"#ffffff"},{"x":24,"y":12,"c":"#ffffff"},{"x":24,"y":13,"c":"#ffffff"},{"x":24,"y":14,"c":"#ffffff"},{"x":24,"y":16,"c":"#ffffff"},{"x":24,"y":17,"c":"#ffffff"},{"x":24,"y":15,"c":"#ffffff"},{"x":24,"y":18,"c":"#ffffff"},{"x":24,"y":19,"c":"#ffffff"},{"x":24,"y":20,"c":"#ffffff"},{"x":24,"y":21,"c":"#ffffff"},{"x":25,"y":21,"c":"#ffffff"},{"x":25,"y":20,"c":"#ffffff"},{"x":25,"y":19,"c":"#ffffff"},{"x":25,"y":18,"c":"#ffffff"},{"x":25,"y":17,"c":"#ffffff"},{"x":25,"y":16,"c":"#ffffff"},{"x":25,"y":15,"c":"#ffffff"},{"x":25,"y":14,"c":"#ffffff"},{"x":25,"y":13,"c":"#ffffff"},{"x":25,"y":12,"c":"#ffffff"},{"x":26,"y":14,"c":"#ffffff"},{"x":26,"y":15,"c":"#ffffff"},{"x":26,"y":16,"c":"#ffffff"},{"x":26,"y":17,"c":"#ffffff"},{"x":26,"y":18,"c":"#ffffff"},{"x":26,"y":21,"c":"#ffffff"},{"x":26,"y":22,"c":"#ffffff"},{"x":26,"y":20,"c":"#ffffff"},{"x":26,"y":19,"c":"#ffffff"},{"x":27,"y":15,"c":"#ffffff"},{"x":10,"y":24,"c":"#ffffff"},{"x":12,"y":24,"c":"#ffffff"},{"x":11,"y":25,"c":"#ffffff"},{"x":11,"y":24,"c":"#ffffff"},{"x":12,"y":25,"c":"#ffffff"},{"x":13,"y":24,"c":"#ffffff"},{"x":15,"y":26,"c":"#ffffff"},{"x":13,"y":26,"c":"#ffffff"},{"x":13,"y":25,"c":"#ffffff"},{"x":14,"y":25,"c":"#ffffff"},{"x":14,"y":26,"c":"#ffffff"},{"x":15,"y":25,"c":"#ffffff"},{"x":16,"y":25,"c":"#ffffff"},{"x":16,"y":24,"c":"#ffffff"},{"x":17,"y":24,"c":"#ffffff"},{"x":18,"y":24,"c":"#ffffff"},{"x":19,"y":25,"c":"#ffffff"},{"x":18,"y":25,"c":"#ffffff"},{"x":19,"y":24,"c":"#ffffff"},{"x":20,"y":25,"c":"#ffffff"},{"x":20,"y":26,"c":"#ffffff"},{"x":21,"y":26,"c":"#ffffff"},{"x":21,"y":25,"c":"#ffffff"},{"x":22,"y":25,"c":"#ffffff"},{"x":22,"y":26,"c":"#ffffff"},{"x":23,"y":26,"c":"#ffffff"},{"x":23,"y":25,"c":"#ffffff"},{"x":23,"y":24,"c":"#ffffff"},{"x":24,"y":24,"c":"#ffffff"},{"x":24,"y":23,"c":"#ffffff"},{"x":24,"y":25,"c":"#ffffff"},{"x":25,"y":25,"c":"#ffffff"},{"x":25,"y":24,"c":"#ffffff"},{"x":26,"y":24,"c":"#ffffff"},{"x":26,"y":23,"c":"#ffffff"},{"x":25,"y":23,"c":"#ffffff"},{"x":25,"y":22,"c":"#ffffff"},{"x":28,"y":14,"c":"#ffffff"},{"x":29,"y":13,"c":"#ffffff"},{"x":29,"y":14,"c":"#ffffff"},{"x":29,"y":15,"c":"#ffffff"},{"x":28,"y":15,"c":"#ffffff"},{"x":27,"y":16,"c":"#ffffff"},{"x":28,"y":16,"c":"#ffffff"},{"x":30,"y":16,"c":"#ffffff"},{"x":27,"y":24,"c":"#ffffff"},{"x":27,"y":25,"c":"#ffffff"},{"x":28,"y":24,"c":"#ffffff"},{"x":27,"y":23,"c":"#ffffff"},{"x":27,"y":22,"c":"#ffffff"},{"x":27,"y":21,"c":"#ffffff"},{"x":27,"y":20,"c":"#ffffff"},{"x":27,"y":19,"c":"#ffffff"},{"x":27,"y":18,"c":"#ffffff"},{"x":27,"y":17,"c":"#ffffff"},{"x":29,"y":16,"c":"#ffffff"},{"x":32,"y":16,"c":"#ffffff"},{"x":32,"y":17,"c":"#ffffff"},{"x":32,"y":18,"c":"#ffffff"},{"x":31,"y":18,"c":"#ffffff"},{"x":31,"y":17,"c":"#ffffff"},{"x":30,"y":17,"c":"#ffffff"},{"x":29,"y":17,"c":"#ffffff"},{"x":28,"y":17,"c":"#ffffff"},{"x":28,"y":18,"c":"#ffffff"},{"x":29,"y":18,"c":"#ffffff"},{"x":30,"y":18,"c":"#ffffff"},{"x":28,"y":19,"c":"#ffffff"},{"x":29,"y":19,"c":"#ffffff"},{"x":30,"y":19,"c":"#ffffff"},{"x":31,"y":19,"c":"#ffffff"},{"x":30,"y":20,"c":"#ffffff"},{"x":29,"y":20,"c":"#ffffff"},{"x":28,"y":20,"c":"#ffffff"},{"x":28,"y":21,"c":"#ffffff"},{"x":30,"y":21,"c":"#ffffff"},{"x":29,"y":21,"c":"#ffffff"},{"x":31,"y":22,"c":"#ffffff"},{"x":31,"y":21,"c":"#ffffff"},{"x":32,"y":22,"c":"#ffffff"},{"x":30,"y":22,"c":"#ffffff"},{"x":30,"y":23,"c":"#ffffff"},{"x":29,"y":23,"c":"#ffffff"},{"x":28,"y":23,"c":"#ffffff"},{"x":28,"y":22,"c":"#ffffff"},{"x":29,"y":22,"c":"#ffffff"},{"x":29,"y":24,"c":"#ffffff"},{"x":28,"y":25,"c":"#ffffff"},{"x":30,"y":24,"c":"#ffffff"},{"x":31,"y":23,"c":"#ffffff"},{"x":29,"y":25,"c":"#000000"},{"x":31,"y":24,"c":"#000000"}]

//ctx.fillStyle = 'pink';
//ctx.fillRect(0, 0, canvas.width, canvas.height);

var pixels = new Pixels(points);
pixels.scale(3);
pixels.centerPosition(canvas.width/2, canvas.height/2);
pixels.draw(canvas);