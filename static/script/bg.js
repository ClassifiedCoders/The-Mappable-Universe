window.onload = ()=>{
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#04182e";
ctx.fillRect(0,0,1000,1000);
ctx.fillStyle = "#fff";
for(var i = 0; i < 100; i++){
  ctx.fillRect(Math.floor(Math.random()*ctx.canvas.width),Math.floor(Math.random()*ctx.canvas.height),1,1);
}
document.body.style.background = "url(\'" + ctx.canvas.toDataURL() + "\')";
};
function dirt(){
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = 25;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#330";
  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle = "#440";
  for(var i = 0; i < 25; i++){
    ctx.fillRect(Math.floor(Math.random()*ctx.canvas.width),Math.floor(Math.random()*ctx.canvas.height),1,1);
  }
  return ctx;
}
function stone(){
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = 25;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#333";
  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle = "#383838";
  for(var i = 0; i < 25; i++){
    ctx.fillRect(Math.floor(Math.random()*ctx.canvas.width),Math.floor(Math.random()*ctx.canvas.height),2,2);
  }
  return ctx;
}
function coal(){
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = 25;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#333";
  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle = "#000";
  for(var i = 0; i < 25; i++){
    ctx.fillRect(Math.floor(Math.random()*ctx.canvas.width),Math.floor(Math.random()*ctx.canvas.height),2,2);
  }
  return ctx;
}
function iron(){
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = 25;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#333";
  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle = "#444";
  for(var i = 0; i < 25; i++){
    ctx.fillRect(Math.floor(Math.random()*ctx.canvas.width),Math.floor(Math.random()*ctx.canvas.height),2,2);
  }
  return ctx;
}
function copper(){
  var canvas = document.createElement("canvas");
  canvas.width = canvas.height = 25;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#333";
  ctx.fillRect(0,0,1000,1000);
  ctx.fillStyle = "#440";
  for(var i = 0; i < 25; i++){
    ctx.fillRect(Math.floor(Math.random()*ctx.canvas.width),Math.floor(Math.random()*ctx.canvas.height),2,2);
  }
  return ctx;
}