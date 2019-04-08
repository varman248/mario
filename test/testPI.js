
function move(x, y, angle, distance){
	let mx = x + distance * Math.cos(angle);
	let my = y + distance * Math.sin(angle);
	return {x:mx, y:my}
}

function arrowDraw(p0, p1, color){
	//variables to be used when creating the arrow
	var headlen = 10;
	var angle = Math.atan2(p1.y-p0.y,p1.x-p0.x);
	//starting path of the arrow from the start square to the end square and drawing the stroke
	ctx.beginPath();
	ctx.moveTo(p0.x, p0.y);
	ctx.lineTo(p1.x, p1.y);
	ctx.strokeStyle = color;
	ctx.lineWidth = 5;
	ctx.stroke();
	//starting a new path from the head of the arrow to one of the sides of the point
	ctx.beginPath();
	ctx.moveTo(p1.x, p1.y);
	ctx.lineTo(p1.x-headlen*Math.cos(angle-Math.PI/7),p1.y-headlen*Math.sin(angle-Math.PI/7));
	//path from the side point of the arrow, to the other side point
	ctx.lineTo(p1.x-headlen*Math.cos(angle+Math.PI/7),p1.y-headlen*Math.sin(angle+Math.PI/7));
	//path from the side point back to the tip of the arrow, and then again to the opposite side point
	ctx.lineTo(p1.x, p1.y);
	ctx.lineTo(p1.x-headlen*Math.cos(angle-Math.PI/7),p1.y-headlen*Math.sin(angle-Math.PI/7));
	//draws the paths created above
	ctx.strokeStyle = color;
	ctx.lineWidth = 5;
	ctx.stroke();
	ctx.fillStyle = color;
	ctx.fill();
}

function pixelDraw(ctx, x, y, color, s) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, s, s);
}

function drawPI(angle, color){
	let start = {x:250, y:250};
	let end = move(start.x, start.y, angle, 50);
	arrowDraw(start, end, color);
	
}
/*--------------------------------------*/
var canvas = $('canvas')[0];
var ctx = canvas.getContext('2d');

function angleReduce(a){
	let angle = a;
	let d = Math.floor(a/(Math.PI*2));
	if(d){ angle = a-d; }
	return angle;
}

function arraySum(a){
	return a.reduce((p, c) => p + c, 0);
}

function angleSum(as){
	let len = as.length;
	let x = arraySum(as.map(Math.cos));
	let y = arraySum(as.map(Math.sin));
	return Math.atan2(y/len, x/len);
}

function angleSum2(as, ws){
	let len = arraySum(ws);
	let ax = as.map(Math.cos);
	let ay = as.map(Math.sin);
	let x = arraySum(ax.map((e, i) => e * ws[i])) / len;
	let y = arraySum(ay.map((e, i) => e * ws[i])) / len;
	return Math.atan2(y, x);
}

function nrange(min, max, t){
    if (min > max){ [max, min]=[min, max]; }
    return t*(max-min)+min;
}
	
function angle_nrange(t, a, b){
	let ax = Math.cos(a), ay = Math.sin(a);
	let bx = Math.cos(b), by = Math.sin(b);
	return Math.atan2(t*(by-ay)+ay, t*(bx-ax)+ax);
}

// let g = Math.PI/2;
// let j = g*-1;
// let r = Math.PI*2;

// let list = [g, r, j];
// let a = angleSum2(list, [0, 1, 1]);

// drawPI(g, 'lime');
// drawPI(r, 'red');
// drawPI(j, 'orange');

let a = Math.PI;
let b = Math.PI/2;
let t = 0;
setInterval(()=>{
	let c = angle_nrange(t, a, b);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawPI(a, 'blue');
	drawPI(b, 'red');
	drawPI(c, 'lime');
	t+=.01;
	if (t>1){t=1}
}, 10);























