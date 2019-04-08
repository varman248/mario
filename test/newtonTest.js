class Particle {

  constructor(x, y) {
    // POSITION
    this.p = {x:x, y:y};
    // VELOCITY
    this.v = {x:0, y:0};
    // ACCELERATION
    this.a = {x:0, y:0};
    // FORCE
    this.f = {x:0, y:0};
    // MASS
    this.m = 500;
    // COEFF OF RESTITUTION
    this.cor = 0;
    // RAYON
    this.r = 10;
    // GROUND
    this.ground = false;
  }

  applyFriction(n){
    this.v.x *= n;
    this.v.y *= n;
  }

  applyVelocity() {
    this.p.x += this.v.x;
    this.p.y += this.v.y;
  }
  
  applyAcceleration() {
    this.v.x += this.a.x;
    this.v.y += this.a.y;
  }
  
  applyForce() {
    this.a.x = this.f.x / this.m;
    this.a.y = this.f.y / this.m;
  }
  
  exertForce(f) {
    this.f.x += f.x;
    this.f.y += f.y;
  }

  update() {
    this.ground = false;
    this.applyForce();
    this.f.x = this.f.y = 0;
    this.applyAcceleration();
    this.applyVelocity();
  }
  
  checkBounds(w, h) {
    // Right
    if (this.p.x > w - this.r) {
      this.p.x = w - this.r;
      this.v.x *= -this.cor;
    };
    // Left
    if (this.p.x < this.r) {
      this.p.x = this.r;
      this.v.x *= -this.cor;
    };
    // Up
    //Gravity should pull it back down
    if (this.p.y < this.r) {
      this.p.y = this.r;
      this.v.y *= -this.cor;
    };
    // Down
    if (this.p.y > h - this.r) {
      this.p.y = h - this.r;
      this.v.y *= -this.cor;
      //test
      this.ground = true;
      this.applyFriction(.95);
    };
  }
  
  draw(ctx) {
    ctx.fillStyle = `hsl(${this.p.x/4+180}, 100%, 65%)`;
    ctx.beginPath();
    ctx.arc(this.p.x, this.p.y, this.r, 0, 2*Math.PI);
    ctx.fill();
  }
}

/*------------------------------------------------*/
var canvas = $('canvas')[0];
var ctx = canvas.getContext('2d');


var obj = new Particle(100, 100);


/*------------------------------------------------*/
// EVENT LISTENER
let walk = jump = right = left = false;
$(document).on('keydown', (e)=>{
  if (e.which==39){ right=true; }
  if (e.which==37){ left=true; }
  if (e.which==38){ jump=true; }
});

$(document).on('keyup', (e)=>{
  if (e.which==39){ right=false; }
  if (e.which==37){ left=false; }
  if (e.which==38){ jump=false; }
});


/*------------------------------------------------*/
// ANIMATION PER FRAME
function frame(){
  let ground = obj.ground;
  if(jump && ground){ obj.exertForce({x:0, y:-1500}); }
  if(right && ground){ obj.exertForce({x:50, y:0}); }
  if(left && ground){ obj.exertForce({x:-50, y:0}); }
  obj.exertForce( {x: 0, y: 20} );
  obj.update();
  obj.checkBounds(500, 500);
  //DRAW
  ctx.clearRect(0, 0, 500, 500);
  obj.draw(ctx);
  requestAnimationFrame(frame);
}

frame();