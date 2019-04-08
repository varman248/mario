/**
 * Ideas
 * Circle to circle collision ?
 */

/**
 * Particle Class
 */
class Particle {
  constructor(x, y) {
    // Posisition vector
    this.p = { x: x, y: y };
    // Velocity vector
    this.v = { x: Math.random()-.5, y: Math.random()-.5 };
    // Acceleration vector
    this.a = { x: Math.random()-.5, y: Math.random()-.5 };
    // Sum of exerted forces
    this.f = { x: 0, y: 0 };
    // Mass
    this.m = Math.ceil(Math.random()*200+180);
    // Coefficient of restitution
    this.cor = .8;
    
    // Visual bits and bobs
    this.c = `hsl(${this.p.x/4+180}, 100%, 65%)`;
    this.r = Math.sqrt(this.m / Math.PI);
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
    };
  }
  
  update() {
    this.applyForce();
    this.f.x = this.f.y = 0;
    this.applyAcceleration();
    this.applyVelocity();
  }
  
  draw(ctx) {
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.arc(this.p.x, this.p.y, this.r, 0, 2*Math.PI);
    ctx.fill();
  }
}



/**
 * Constants
 */
const w = 600, h = 400;



/**
 * Generation
 */
let particles = new Array(50).fill().map(() => {
  return new Particle(Math.random()*w, Math.random()*h);
});



/**
 * Canvas 'n drawing baby
 */
var c = $('canvas')[0];
var ctx = c.getContext('2d');

c.width = w;
c.height = h;

function draw() {
  ctx.globalAlpha = .5;
  ctx.fillStyle = '#eceeef';
  ctx.fillRect(0, 0, w, h);
  ctx.globalAlpha = 1;
  
  let p;
  for (var i=0; i<particles.length; i++) {
    p = particles[i];
    // Force of gravity
    p.exertForce( {x: 0, y: p.m * .2} );
    // p.applyGravity(.1);
    p.update();
    p.checkBounds(w, h);
    p.draw(ctx);
  }
  
  requestAnimationFrame(draw);
}

draw();


/**
 * Mouse interaction is where it gets sexy
 */
// Mouse object tracker
let mouse = {
  p: { x: 0, y: 0 },
  v: { x: 0, y: 0 },
  down: false
};

// Track pointer pos
document.body.addEventListener('mousemove', function(ev) {
  setMouseCoords(ev, c);
});
document.body.addEventListener('touchmove', function(ev) {
  ev.preventDefault();
  setMouseCoords(ev.changedTouches[0], c);
});
document.body.addEventListener('touchstart', function(ev) {
  ev.preventDefault();
  setMouseCoords(ev.changedTouches[0], c);
  mouse.v.x = mouse.v.y = 0;
});

// Helper function
function setMouseCoords(ev, elmt) {
  let rect = elmt.getBoundingClientRect();
  let temp = { x: mouse.p.x, y: mouse.p.y };
  mouse.p.x = Math.round(ev.clientX - rect.left);
  mouse.p.y = Math.round(ev.clientY - rect.top);
  mouse.v.x = (mouse.p.x - temp.x)*5;
  mouse.v.y = (mouse.p.y - temp.y)*5;
}


// Track pointer state
document.body.addEventListener('mousedown', function(ev) { mouse.down = true });
document.body.addEventListener('touchstart', function(ev) { mouse.down = true });
document.body.addEventListener('mouseup', function(ev) { mouse.down = false });
document.body.addEventListener('mouseout', function(ev) { mouse.down = false });
document.body.addEventListener('touchend', function(ev) { mouse.down = false });


// Right click
document.body.addEventListener('contextmenu', function(ev) {
  ev.preventDefault();
  for (var i=0; i<particles.length; i++) {
    particles[i].v.x = particles[i].v.y = 0;
    particles[i].a.x = particles[i].a.y = 0;
    particles[i].p.y = h/2;
  }
});


// Magic
document.body.addEventListener('mousemove', mouseForce);
document.body.addEventListener('touchmove', mouseForce);

// The function name sounds badass
function mouseForce() {
  if (mouse.down) {
    for (var i=0; i<particles.length; i++) {
      particles[i].exertForce( {x: mouse.v.x*2, y: mouse.v.y*2} );
    }
  }
}