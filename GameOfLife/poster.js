
let canvas
let gif
let stars = []
let starC;
let planet = [
  {R:50, r:10,color:'hsl(200,80%,60%)',velo:8},   //Mercury
  {R:70, r:15,color:'hsl(40,90%,60%)',velo:6},   //Venus
  {R:110, r:20,color:'hsl(230,75%,65%)',velo:4},   //Earth
  {R:200, r:25,color:'hsl(10,80%,60%)',velo:3},   //Mars
  {R:500, r:45,color:'hsl(20,90%,60%)',velo:2},    //Jupiter
  {R:630,r:30,color:'hsl(255,90%,70%)',velo:1}    //Saturn
]
let sun = {r:50,color:'hsl(50,100%,60%)'}

let courseC = 'hsl(220,50%,60%)';



function setup(){
  canvas = createCanvas(600,800)
  canvas.parent('contain')
  console.log('canvas created');
  background(color('hsl(220,100%,20%)'))

  ellipse(CENTER)

  starC = color('hsl(220,50%,95%)')

  for(let i = 0;i < 50;i++){
    stars.push({
      x : width * Math.random(),
      y : height * Math.random(),
      r : 5 * Math.random()
    })
  }

  gif = new GIF({
    workers:1,
    quality:500,
    workerScript:'resource/gif.js-master/dist/gif.worker.js',
  })
  gif.on('finished',function(blob){
    console.log("he says finish");
    window.open(URL.createObjectURL(blob))
  })
}

let T = 0;
let doAdd = false
function draw(){

  frameRate(15)
  background(color('hsl(200,50%,15%)'))


  for(let i = 0; i < stars.length;i++){
    let s = stars[i]
    fill(250,250,250,10)
    noStroke()
    // ellipse(s.x,s.y,200)
  }


  push()

  translate(width/2,height/8)
  fill(sun.color)
  ellipse(0,0,sun.r)


  for(let i = 0; i<planet.length;i++){
    let p = planet[i]

    noFill()
    strokeWeight(1)
    stroke(courseC)
    ellipse(0,0,p.R * 2)

    fill(p.color)
    noStroke()
    let alpha = map(T,0,1000,0,p.velo * 2 * PI)
    ellipse(
      sin(alpha) * p.R,
      cos(alpha) * p.R,
      p.r)

    if(i == 2){
      fill(250,230,100)
      ellipse(
        sin(alpha)*p.R + cos(5*alpha) * 20,
        cos(alpha)*p.R + sin(5*alpha) * 20,
        5
      )
    }

  }


  // saveCanvas(canvas)
  pop()

  fill('hsl(30,100%,90%)')
  textSize(80)
  // textFont('Georgia')
  textFont('Lobster')
  text('W3 Club' , width/8,height/3*2)
  textSize(50)
  textFont('STSongti-SC-Bold')
  text('研发·技术交流会',width/8 + 35,height/3*2 + 80)

  T = (T + 2)%1000


  if(doAdd){
    gif.addFrame(canvas.canvas,{delay:50})
  }
}


function setADD(){

  if(doAdd){
    console.log("stop add frames");
    doAdd = false
  }else{
    console.log('do add frames');
    doAdd = true
  }

}

function setRender(){
  console.log("do render");
  gif.render()
}
