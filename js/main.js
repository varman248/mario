/* --------------------------------------------------------- */

var canvas = $('canvas')[0];
ctx = canvas.getContext('2d');

var game = new Game(canvas);

/*------------------------------------------------*/
// EVENT LISTENER
let walk = jump = right = left = false;
$(document).on('keydown', (e)=>{
  if (e.which==39){ right=true; }
  if (e.which==37){ left=true; }
  if (e.which==38 && game.mario.force.ground){ jump=true; }
});

$(document).on('keyup', (e)=>{
  if (e.which==39){ right=false; }
  if (e.which==37){ left=false; }
  if (e.which==38){ jump=false; }
});

/*------------------------------------------------*/

let time = new Time();

// ANIMATION PER FRAME
function frame(){
  // APPLY ALL FORCES
  let ground = game.mario.force.ground;
  // APPLY GRAVITY
  game.mario.force.exertForce({x:0, y:100});
  game.enemies.force.exertForce({x:0, y:100});
  // JUMP
  if(jump && ground){ game.mario.force.exertForce({x:0, y:-1500}); }
  // WALK TO RIGTH
  if(right && ground){ game.mario.force.exertForce({x:50, y:0}); }
  // WALK TO LEFT
  if(left && ground){ game.mario.force.exertForce({x:-50, y:0}); }
  // ACTION IN AIR
  if(right && !ground){ game.mario.force.exertForce({x:25, y:0}); }
  if(left && !ground){ game.mario.force.exertForce({x:-25, y:0}); }
  // AJUSTE FORCES WITHE TIME SPENT
  game.update();
  //DRAW
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.draw(canvas);
  requestAnimationFrame(frame);
}

frame();