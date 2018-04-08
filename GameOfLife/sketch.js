const N = 50;
let STATE = [];
let NEXT  = [];

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
    if(floor(Math.random() * 1.2)){
      STATE[i] = true
    }else{
      STATE[i] = false
    }
  }
}

function setup(){

  initState()
  populate()

  pixelDensity(1)
  createCanvas(500,500)
  background(200,50,0);

}

function draw(){

  frameRate(10)
  step()

  loadPixels()
    for(let i = 0; i < 4 * width * height; i += 4){
      let index = find(i/4)

      pixels[i]     = STATE[index]?255:0
      pixels[i + 1] = STATE[index]?255:0
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
