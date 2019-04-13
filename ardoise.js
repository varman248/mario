
function pixelDraw(ctx, x, y, color, s) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, s, s);
}

function drawGrid(canvas, nx, ny, color, s) {
  let ctx = canvas.getContext('2d');
  gw = canvas.width/nx;
  gh = canvas.height/ny;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // DRAW
  for (let y=0; y<canvas.height; y++){
    for (let x=gw; x<canvas.width; x += gw){ pixelDraw(ctx, x, y, color, s);}
  }

  for (let x=0; x<canvas.width; x++){
    for (let y=gh; y<canvas.height; y += gh){ pixelDraw(ctx, x, y, color, s);}
  }
}

function array_remove_duplicates(list){
  var uniqueList = [];
  $.each(list, function(i, el){
      if($.inArray(el, uniqueList) === -1) uniqueList.push(el);
  });
  return uniqueList;
}

function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }

function applyCase(vectors){
  // APPLY CASE
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(canvas, nx, ny, 'red', 1);
  let oldC = $('#picker').val();
  for (let g of vectors){
    ctx.fillStyle = g.c;
    ctx.fillRect(g.x*gw+s, g.y*gh+s, gw-s, gh-s);
  }
  ctx.fillStyle = oldC;
  $('textarea').val(JSON.stringify(vectors));
}

function paletteRefresh(){
  // ADD COLORS
  var colors = [];
  for(let g of vectors){ colors.push(g.c); }
  var colors = array_remove_duplicates(colors);
  $('#palette').empty();
  for (let c of colors) {
    let cont = $('<div>').attr({style:'display:flex; flex-direction:column'});
    let div = $('<div>').attr({class:'dot', style:'background-color:'+c}).appendTo(cont);
	let inp = $('<input/>').attr({class:'pic', type: 'color', id:c, value: c}).appendTo(cont);
    $('#palette').append(cont);
	// ADD EVENT COLOR ON PALETTE
	$('.pic').on('change', (e)=>{
	  let inp = $(e.currentTarget);
	  let dot = inp.siblings();
	  let oldC = rgb2hex(dot.css('background-color'));
	  dot.css({'background-color':inp.val()});
	  ctx.fillStyle = inp.val();
	  //CHANGE COLOR
	  for (let i=0; i<vectors.length; i++){if(vectors[i].c==oldC){vectors[i].c=inp.val();} }
	  applyCase(vectors);
	});
  }
  // ADD EVENT COLOR ON PALETTE
  $('#palette div > *').on('click', (e)=>{
	color = rgb2hex($(e.currentTarget).css('backgroundColor'));
    $('#picker').val(color);
	ctx.fillStyle = color;
  });
}

function addCase(mx, my, nx, ny, canvas, color){
  var g = mouseToGrid(mx, my, nx, ny)
  if (!color){ color="#ff0000";}
  var point = {x:g.x, y:g.y, c:color};
  // CHECK IF ALREADY EXIST
  var found = false;
  for (var i=0; i<vectors.length; i++){
    let p = vectors[i];
    if (p.x==g.x && p.y==g.y){ found = true; break; }
  }
  // ADD OR REMOVE POINT
  if (!found){ vectors.push(point); }
  else{ vectors.splice(i, 1); }
  applyCase(vectors);
	paletteRefresh();
}

function centerFind(points){
	let length = points.length;
	let xs=0, ys=0;
	for (let p of points){
		xs += p.x;
		ys += p.y;
	}
	return {x:Math.floor(xs/length), y:Math.floor(ys/length)}; 
}

function centerPosition(mx, my, points){
	let c = centerFind(points);
	if (c){
		let list = [];
		for (let p of points){
			list.push({x:p.x-c.x+mx, y:p.y-c.y+my, c:p.c});
		}
		return list;
	}
	else {return points};
}

function mouseToGrid(mx, my, nx, ny){
	let gw = canvas.width/nx, gh = canvas.height/ny;
	let gx = Math.round(mx/gw)-1, gy = Math.round(my/gh)-1;
	return {x:gx, y:gy}
}
/*-----------------------------------------------*/



var canvas = $('canvas')[0];
var ctx = canvas.getContext('2d');

// DRAW GRID
var nx = 20, ny = 20, s = 2;

var vectors = [{"x":4,"y":17,"c":"#a52a2a"},{"x":5,"y":16,"c":"#a52a2a"},{"x":7,"y":16,"c":"#a52a2a"},{"x":6,"y":16,"c":"#a52a2a"},{"x":5,"y":17,"c":"#a52a2a"},{"x":6,"y":17,"c":"#a52a2a"},{"x":7,"y":17,"c":"#a52a2a"},{"x":7,"y":15,"c":"#ff0000"},{"x":6,"y":15,"c":"#ff0000"},{"x":6,"y":14,"c":"#ff0000"},{"x":8,"y":14,"c":"#ff0000"},{"x":7,"y":14,"c":"#ff0000"},{"x":8,"y":15,"c":"#ff0000"},{"x":9,"y":14,"c":"#ff0000"},{"x":10,"y":14,"c":"#ff0000"},{"x":11,"y":15,"c":"#ff0000"},{"x":12,"y":15,"c":"#ff0000"},{"x":12,"y":14,"c":"#ff0000"},{"x":13,"y":15,"c":"#ff0000"},{"x":13,"y":14,"c":"#ff0000"},{"x":12,"y":16,"c":"#a52a2a"},{"x":12,"y":17,"c":"#a52a2a"},{"x":13,"y":17,"c":"#a52a2a"},{"x":13,"y":16,"c":"#a52a2a"},{"x":14,"y":17,"c":"#a52a2a"},{"x":14,"y":16,"c":"#a52a2a"},{"x":15,"y":17,"c":"#a52a2a"},{"x":7,"y":13,"c":"#ff0000"},{"x":7,"y":12,"c":"#ff0000"},{"x":8,"y":13,"c":"#ff0000"},{"x":9,"y":13,"c":"#ff0000"},{"x":10,"y":12,"c":"#ff0000"},{"x":9,"y":12,"c":"#ff0000"},{"x":10,"y":13,"c":"#ff0000"},{"x":11,"y":14,"c":"#ff0000"},{"x":11,"y":13,"c":"#ff0000"},{"x":12,"y":12,"c":"#ff0000"},{"x":12,"y":13,"c":"#ff0000"},{"x":8,"y":11,"c":"#ff0000"},{"x":8,"y":10,"c":"#ff0000"},{"x":8,"y":9,"c":"#ff0000"},{"x":10,"y":11,"c":"#ff0000"},{"x":9,"y":11,"c":"#ff0000"},{"x":11,"y":11,"c":"#ff0000"},{"x":11,"y":10,"c":"#ff0000"},{"x":6,"y":12,"c":"#a52a2a"},{"x":7,"y":11,"c":"#a52a2a"},{"x":6,"y":11,"c":"#a52a2a"},{"x":7,"y":10,"c":"#a52a2a"},{"x":6,"y":9,"c":"#a52a2a"},{"x":7,"y":9,"c":"#a52a2a"},{"x":6,"y":10,"c":"#a52a2a"},{"x":5,"y":10,"c":"#a52a2a"},{"x":5,"y":11,"c":"#a52a2a"},{"x":4,"y":11,"c":"#a52a2a"},{"x":9,"y":10,"c":"#a52a2a"},{"x":10,"y":10,"c":"#a52a2a"},{"x":9,"y":9,"c":"#a52a2a"},{"x":10,"y":9,"c":"#a52a2a"},{"x":11,"y":9,"c":"#a52a2a"},{"x":12,"y":10,"c":"#a52a2a"},{"x":12,"y":11,"c":"#a52a2a"},{"x":13,"y":10,"c":"#a52a2a"},{"x":13,"y":11,"c":"#a52a2a"},{"x":6,"y":13,"c":"#ffa500"},{"x":5,"y":13,"c":"#ffa500"},{"x":5,"y":12,"c":"#ffa500"},{"x":4,"y":12,"c":"#ffa500"},{"x":4,"y":13,"c":"#ffa500"},{"x":4,"y":14,"c":"#ffa500"},{"x":5,"y":14,"c":"#ffa500"},{"x":13,"y":13,"c":"#ffa500"},{"x":15,"y":14,"c":"#ffa500"},{"x":14,"y":14,"c":"#ffa500"},{"x":14,"y":13,"c":"#ffa500"},{"x":15,"y":13,"c":"#ffa500"},{"x":15,"y":12,"c":"#ffa500"},{"x":14,"y":12,"c":"#ffa500"},{"x":13,"y":12,"c":"#a52a2a"},{"x":11,"y":12,"c":"#ffa500"},{"x":8,"y":12,"c":"#ffa500"},{"x":14,"y":11,"c":"#a52a2a"},{"x":15,"y":11,"c":"#a52a2a"},{"x":14,"y":10,"c":"#a52a2a"},{"x":7,"y":8,"c":"#ffa500"},{"x":7,"y":7,"c":"#ffa500"},{"x":8,"y":7,"c":"#ffa500"},{"x":9,"y":8,"c":"#ffa500"},{"x":8,"y":8,"c":"#ffa500"},{"x":9,"y":7,"c":"#ffa500"},{"x":10,"y":8,"c":"#ffa500"},{"x":6,"y":7,"c":"#a52a2a"},{"x":5,"y":7,"c":"#a52a2a"},{"x":5,"y":6,"c":"#a52a2a"},{"x":5,"y":5,"c":"#a52a2a"},{"x":6,"y":6,"c":"#ffa500"},{"x":6,"y":5,"c":"#ffa500"},{"x":7,"y":6,"c":"#a52a2a"},{"x":8,"y":6,"c":"#a52a2a"},{"x":7,"y":5,"c":"#a52a2a"},{"x":6,"y":4,"c":"#a52a2a"},{"x":6,"y":3,"c":"#ff0000"},{"x":7,"y":2,"c":"#ff0000"},{"x":8,"y":4,"c":"#a52a2a"},{"x":9,"y":5,"c":"#ffa500"},{"x":8,"y":5,"c":"#ffa500"},{"x":9,"y":6,"c":"#ffa500"},{"x":10,"y":4,"c":"#ffa500"},{"x":9,"y":4,"c":"#ffa500"},{"x":10,"y":5,"c":"#ffa500"},{"x":10,"y":6,"c":"#ffa500"},{"x":10,"y":7,"c":"#ffa500"},{"x":11,"y":8,"c":"#ffa500"},{"x":11,"y":7,"c":"#a52a2a"},{"x":12,"y":6,"c":"#a52a2a"},{"x":12,"y":7,"c":"#a52a2a"},{"x":13,"y":7,"c":"#a52a2a"},{"x":12,"y":8,"c":"#ffa500"},{"x":13,"y":8,"c":"#ffa500"},{"x":14,"y":7,"c":"#a52a2a"},{"x":13,"y":6,"c":"#ffa500"},{"x":14,"y":6,"c":"#ffa500"},{"x":15,"y":6,"c":"#ffa500"},{"x":14,"y":5,"c":"#ffa500"},{"x":13,"y":5,"c":"#ffa500"},{"x":12,"y":5,"c":"#ffa500"},{"x":11,"y":6,"c":"#ffa500"},{"x":11,"y":5,"c":"#a52a2a"},{"x":11,"y":4,"c":"#a52a2a"},{"x":7,"y":4,"c":"#a52a2a"},{"x":7,"y":3,"c":"#ff0000"},{"x":8,"y":2,"c":"#ff0000"},{"x":8,"y":3,"c":"#ff0000"},{"x":9,"y":2,"c":"#ff0000"},{"x":10,"y":3,"c":"#ff0000"},{"x":10,"y":2,"c":"#ff0000"},{"x":9,"y":3,"c":"#ff0000"},{"x":11,"y":3,"c":"#ff0000"},{"x":11,"y":2,"c":"#ff0000"},{"x":12,"y":3,"c":"#ff0000"},{"x":13,"y":3,"c":"#ff0000"},{"x":14,"y":3,"c":"#ff0000"},{"x":12,"y":4,"c":"#ffa500"}];

var bkg = [];
drawGrid(canvas, nx, ny, 'red', 1);

applyCase(vectors);
paletteRefresh();
/*-----------------------------------------------*/

// GET COLOR ON PICKER
$('#picker').on('change', ()=>{
  ctx.fillStyle = $('#picker').val();
});

// ADD CASE
$('canvas').on("click", (e)=>{
  addCase(e.offsetX, e.offsetY, nx, ny, canvas, ctx.fillStyle);
});


// OFFSET
var ctr = false;
$(document).on('keydown', (e)=>{if (e.which==17){ctr = true;}});
$(document).on('keyup', (e)=>{ctr = false;}); 

$('canvas').on('mousemove', (e)=>{
  if (ctr){ 
	let g = mouseToGrid(e.offsetX, e.offsetY, nx, ny);
	vectors = centerPosition(g.x, g.y, vectors);
	applyCase(vectors);
  }
})




$('canvas').on('mouseenter', (e)=>{ $('body').attr('style', 'cursor: crosshair');});
$('canvas').on('mouseleave', (e)=>{ $('body').attr('style', 'cursor: auto');});


/*--------------------*/
// GRID PLUS
$('#plus').click(()=>{
  nx++; ny++; drawGrid(canvas, nx, ny, 'red', 1);
  applyCase(vectors);
});

// GRID MOINS
$('#moins').click(()=>{
  nx--; ny--; 
  if (nx==1){ nx=2; ny=2; }
  drawGrid(canvas, nx, ny, 'red', 1);
  applyCase(vectors);
});

// ADD TO BKG
$('#background').click(()=>{
  bkg = vectors.slice();
});

// SHOW BKG
$('#show').mousedown(()=>{
  applyCase(bkg);
});

// HIDE BKG
$('#show').mouseup(()=>{
  applyCase(vectors);
});

/*--------------------*/

// COPY
$('#copy').click(()=>{
  let text = $('textarea');
  text.focus();
  text.select();
  document.execCommand('copy');
});

// CLEAR
$('#clear').click(()=>{
  let text = $('textarea');
  vectors = [];
  $('#palette').empty();
  applyCase(vectors);
  text.val('');
});

// IMPORT
$('#import').click(()=>{
  let text = $('textarea');
  vectors = JSON.parse(text.val());
  applyCase(vectors);
  paletteRefresh();
});
