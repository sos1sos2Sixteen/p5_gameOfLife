
let w = 30;
let angle = 0;
let r = 300;
let maxD;

function setup() {
  // put setup code here
  console.log("fuckyou");

  createCanvas(500,500,WEBGL);
  // let maxD = dist(width/2,width/2,width/2,height/2);
  let maxD = 400

}

function draw() {
  // put drawing code here
  frameRate(30)
  background(255,200,000);
  ortho(-r,2*r,r+100,-r,-2*r,2*r)
  // translate( - width / 2, 0);     //把坐标的原点改成指定的位置
  rectMode(CENTER);                     //让rect函数接受坐标指定矩形的中心



  rotateX(asin(1/sqrt(3)))
  rotateY(PI/4)

  for (var z = 0; z < width; z += w){
    for (var x = 0; x < width; x += w){

      push()
      let d = dist(x,z,width/2,height/2);
      // console.log(d);
      let offset = map(d,0,400,-2*PI,2*PI);
      // console.log(offset);
      let a = angle + offset;
      let h = (map (sin(a),-1,1,100,350));
      // fill(255)
      normalMaterial()
      // ambientMaterial()
      translate(x - width/2,0,z)
      box(w,h,w)
      // rect(x,0,w,h);                     // x y width height
      pop()
    }
  }





  angle += 0.15;

}


//
// var grid;
// var next;
//
// var dA = 1;   //1
// var dB = 0.5; //0.5
// var feed = 0.055; //0.055
// var k = 0.062;    //0.062
//
// var t = 1.5;
//
// function setup(){
//
//   frameRate(30)
//   createCanvas(400,400);
//   pixelDensity(1);
//   grid = [];
//   next = [];
//   for(var x = 0; x < width; x ++){
//     grid[x] = []
//     next[x] = []
//     for(var y = 0; y < height; y++){
//       d = dist(x,y,width/2,height/2)
//       d = map(d,0,200,0,1)
//       grid[x][y] = {a:random() * d,b:d * random()}
//       next[x][y] = grid[x][y]
//     }
//   }
//
//   var ratio = 10;
//
//   // for(var x = 1; x < width - 1;x++){
//   //   for(var y = 1; y < height - 1; y++){
//   //     if(dist(x,y,100,100) <= ratio){
//   //       grid[x][y].b = 1;
//   //     }
//   //   }
//   // }
//
// }
//
// function draw(){
//   background(51)
//
//   for(var x = 1; x < width - 1;x++){
//     for(var y = 1; y < height - 1; y++){
//       var a = grid[x][y].a;
//       var b = grid[x][y].b;
//       next[x][y].a = a +
//                       (dA * laplaceA(x,y) -
//                       a * b * b +
//                       feed * (1 - a)) * t;
//       next[x][y].b = b +
//                       (dB * laplaceB(x,y) +
//                       a * b * b -
//                       (k + feed) * b) * t;
//
//       next[x][y].a = constrain(next[x][y].a,0,1);
//       next[x][y].b = constrain(next[x][y].b,0,1);
//     }
//   }
//
//   loadPixels();
//   for(var x = 0; x < width; x++){
//     for(var y = 0; y < height; y++){
//       var pix = (x + y * width) * 4;
//       var a = next[x][y].a;
//       var b = next[x][y].b;
//       var c = floor((a - b) * 255);
//       c = constrain(c,0,255);
//       a = map(a,0,1,0,255);
//       b = map(b,0,1,0,255);
//
//
//
//       l = [255,c,c,255];
//       for(var i = 0;i<4;i++){
//         pixels[pix + i] = l[i];
//       }
//     }
//   }
//   updatePixels();
//
//   swap();
// }
//
//
// function swap(){
//   var t = grid;
//   grid = next;
//   next = t;
// }
//
// function laplaceA(x,y){
//   var sum = 0;
//   sum += grid[x][y].a * -1;
//   sum += grid[x-1][y].a * 0.2;
//   sum += grid[x+1][y].a * 0.2;
//   sum += grid[x][y-1].a * 0.2;
//   sum += grid[x][y+1].a * 0.2;
//   sum += grid[x-1][y-1].a * 0.05;
//   sum += grid[x+1][y+1].a * 0.05;
//   sum += grid[x+1][y-1].a * 0.05;
//   sum += grid[x-1][y+1].a * 0.05;
//
//   return sum;
// }
//
// function laplaceB(x,y){
//   var sum = 0;
//   sum += grid[x][y].b * -1;
//   sum += grid[x-1][y].b * 0.2;
//   sum += grid[x+1][y].b * 0.2;
//   sum += grid[x][y-1].b * 0.2;
//   sum += grid[x][y+1].b * 0.2;
//   sum += grid[x-1][y-1].b * 0.05;
//   sum += grid[x+1][y+1].b * 0.05;
//   sum += grid[x+1][y-1].b * 0.05;
//   sum += grid[x-1][y+1].b * 0.05;
//
//   return sum;
// }
