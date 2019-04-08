

function bezier(t, p0, p1, p2, p3){
	let bx = p0.x*(1-t)**3 + 3*p1.x*t*(1-t)**2 + 3*p2.x*(t**2)*(1-t)+p3.x*t**3;
	let by = p0.y*(1-t)**3 + 3*p1.y*t*(1-t)**2 + 3*p2.y*(t**2)*(1-t)+p3.y*t**3;
	return {x:bx, y:by};
}

function pixelDraw(p, s, color){
	ctx.fillStyle = color;
	ctx.fillRect(p.x, p.y, s, s);
}

function mousePostion(e){
	return {x:e.offsetX, y:e.offsetY};
}

function PointDistance(p0, p1){
	return Math.sqrt((p1.x-p0.x)**2 + (p1.y-p0.y)**2);
}

function PointClosest(p, list){
	let ds = [], index=0;
	for (let i=0; i<list.length; i++){
		ds.push(PointDistance(p, list[i]));
		if(i>0){ if(ds[i]<ds[index]){index=i} }
	}
	return index;
}

function drawBezier(){
	for (let p of ps) { pixelDraw(p, 10, "red"); }
	
	for (let t=0; t<1; t+=0.01){
		let p = bezier(t, ps[0], ps[1], ps[2], ps[3]);
		pixelDraw(p, 2, "blue");
	}
}

function drawSelected(e){
	p = mousePostion(e); 
	idx = PointClosest(p, ps);
	for (let p of ps) { pixelDraw(p, 10, "red"); }
	pixelDraw(ps[idx], 10, "green");
}

/* --------------------------------------------------------- */

var canvas = $('canvas')[0];
ctx = canvas.getContext('2d');

var ps = [{x:100, y:400}, {x:100, y:100}, 
		  {x:400, y:100}, {x:400, y:400}];

drawBezier();

var p, idx;
$('canvas').on('mousedown', (e)=>{ drawSelected(e); });
$('canvas').on('mouseup', ()=>{ p = null; });
$('canvas').on('mousemove', (e)=>{
	if (p){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ps[idx] = mousePostion(e);
		drawBezier();
		drawSelected(e);
	}
});