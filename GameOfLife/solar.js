
const N = 50;
const M = 50;

let t = 0;
let rev = false;
let speed = 510/30;

let Rate = 30;

function setup(){
  createCanvas(800,600)
  background('grey')



}

function draw(){
  frameRate(Rate)
  noStroke()
  for(let j = 0; j < height;j += height / M){
    for(let i = 0; i < width;i += width / N){
      fill(color('hsl('+floor(map(i,0,width,0,255))+','+floor(map(j,0,height,0,100))+'%,50%)'))
      // fill(map(i,0,width,0,255),map(j,0,height,0,255),t)
      rect(i,j,width/N,height/M)
    }
  }

  if(rev){
    t -= speed * 0.2;
    if(t <= 0) rev = !rev;
    constrain(t,0,255)
  }else{
    t = (t + speed * 2)
    if( t >= 255) rev = !rev;
    constrain(t,0,255)
  }

}
