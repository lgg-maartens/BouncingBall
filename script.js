class Ball{
  
  constructor(x, y, w, h, vx, vy,_color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
    this.color = _color;
  }

  draw(){
    fill(this.color);
    ellipse(this.x,this.y,this.w,this.h);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if(this.x < 25 || this.x >= 375){
      this.vx = this.vx * -1;
    }

    if(this.y < 25 || this.y >= 275){
      this.vy = this.vy * -1;
    }
  }
}


var balls = [];

function setup() {
	createCanvas(400, 300);

  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 400) + 1;
    let y = Math.floor(Math.random() * 300) + 1;
    let vx = Math.floor(Math.random() * 6) + 1;
    let vy =  Math.floor(Math.random() * 6) + 1;
    let r = Math.floor(Math.random() * 50) + 1;
    
    let c = '#'+(Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6);
    let b = new Ball(x,y,r,r,vx,vy,c);
    balls.push(b);
  }
}

function draw() {
	background(225);  
  
  balls.forEach(b => b.draw());
}

