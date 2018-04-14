const N = 200;
let STATE = [];
let NEXT  = [];
let TIME = 0;

let initState = function(){
  for (let i = 0; i < N * N;i++){
    STATE.push(false)
    NEXT.push(false)
  }
}

let swapState = function(){
  let temp = STATE;
  STATE = NEXT;
  NEXT = temp;
}

let populate = function(){
  for(let i = 0; i < N * N;i++){
    if(floor(Math.random() * map(dist(i%N,floor(i/N),N/2,N/2),0,20,1,2))){
      STATE[i] = true
    }else{
      STATE[i] = false
    }
  }

  let x = 10; y = 10;
  let form = [x,y,x,y+1,x,y+2,x-1,y+2,x-2,y+1]
  for(let i = 0;i < form.length;i += 2){
    STATE[form[i] + form[i+1] * N] = true
  }

  // STATE[500] = true
}

function setup(){

  initState()
  populate()

  pixelDensity(1)
  createCanvas(1000,1000)
  background(200,50,0);

}

function draw(){

  frameRate(30)
  step()

  loadPixels()
    for(let i = 0; i < 4 * width * height; i += 4){
      let index = find(i/4)



      pixels[i]     = STATE[index]?255:0
      pixels[i + 1] = STATE[index]?200:0
      pixels[i + 2] = 0
      pixels[i + 3] = !STATE[index]?0:255

    }
  updatePixels()

}

function find(i){
  let index_y = floor(i / (width * (height / N)))
  let index_x = floor((i % (width)) / (width / N))
  let index   = index_y * N + index_x

  return index
}

let checkSTATE = function(x,y){
  if(x < 0 || x >= N || y < 0 || y >= N){
    //out of bound
    return false;
  }else{
    return STATE[y * N + x]
  }
}

let step = function(){
  let dx = [-1,-1,-1,0,0,1,1,1]
  let dy = [1,-1,0,1,-1,1,-1,0]
  for (let i = 0; i < N * N; i++){
    let x = i % N;
    let y = floor(i / N)
    let count = 0;
    for(let j = 0; j < 8; j++){
      count += checkSTATE(x + dx[j],y + dy[j])?1:0
    }
    if(count == 3 || (count == 2 && STATE[i])){
      NEXT[i] = true
    }else{
      NEXT[i] = false
    }
  }

  swapState()
}
