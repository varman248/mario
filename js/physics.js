/* --------------------------------------------------------- */
class Physics {

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
    this.m = 100;
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
}

/* --------------------------------------------------------- */