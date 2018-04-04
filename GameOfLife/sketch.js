  const N = 5000;



function setup(){
  createCanvas(100,100)
  background(53);


}

function draw(){




}

var flat = function (x){
  return x[0] * N + x[1];
}
var erect = function (x){
  return [floor(x/N),x%N]
}



var neighbour = function (pos){
  var diff = [-1,0,1]
  var res = []

  for (var i = 0; i < diff.length;i++){
    for (var j = 0; j < diff.length; j++){
      if (!(i == 0 && j == 0)){
        res.push([diff[i],diff[j]])
      }
    }
  }

  return res
}

var frequency = function(list){
  var res = new Map();
  for (var i = 0;i < list.length;i++){
    var item = list[i]


    var flaten = flat(item)
    if(res.has(flaten)){
      res.set(flaten,res.get(flaten) + 1);
    }else{
      res.set(flaten,1);
    }

  }

  return res;
}

var step = function(state){
  var allNeighbour = []
  for(var i = 0;i < state.length;i++){
    // var one = neighbour(state[i])
    // for(var j = 0;j < one.length;j++){
    //   allNeighbour.push(one[j])
    // }
    allNeighbour.push(neighbour(state[i]))
  }
  allNeighbour.flatten()

  frequency(allNeighbour).forEach(function(count,coord,freq){
    if(count == 3 or (count == 2 && state.includes(coord))){
      res.push(erect(coord))
    }
  })
  return res;
}
