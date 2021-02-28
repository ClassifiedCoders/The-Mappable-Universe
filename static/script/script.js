function getId(id) {
	return document.getElementById(id)
}

var cli;
getId("server").onchange = (evt)=>{
function f(){
var _xhr = new XMLHttpRequest();
_xhr.open("GET","/users.json");
_xhr.onloadend = ()=>{
var json = JSON.parse(_xhr.responseText);
for(var elem of getId("server").getElementsByTagName("option")){
  elem.innerHTML = elem.innerHTML.replace(/ \[\d+ Users\]$/,"") + " [" + (json[elem.value]) + " Users]";
}
};
_xhr.send();
}
if(cli){
  if(cli.connected){
    cli.send("0000100","0");
  }
}
cli = new Client(evt.target.value);

cli.onopen = id =>{
  f();
  log("/server-" + cli.where + ": SRNET Connection " + new Date().toUTCString() + "\n" +
          "     Language: " + navigator.language + "\n" +
          "     Platform: " + navigator.platform + "\n" +
          "     Browser: " + navigator.userAgent.split("/").filter((x,i,d)=>{
            return d.length - i < 3;
          }).join("/"));
  //cli.send("0000000",id);
};

cli.onmessage = d =>{
  //log("#" + d.statusCode + " " + d.statusText + " -> " + d.message);
}
};
getId("server").onchange({target:getId("server")});

const usr = localStorage.getItem('username') || "Player";

const username = getId('username-input');
username.value = usr;

username.addEventListener('change', e => {
	localStorage.setItem('username', username.value)
});

getId('solo').addEventListener('click', e => {
	location.href = '/solo';
});

getId('multiplayer').addEventListener('click', e => {
	location.href = '/multiplayer';
});

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#04182e";
ctx.fillRect(0,0,1000,1000);
ctx.fillStyle = "#fff";
for(var i = 0; i < 100; i++){
  ctx.fillRect(Math.floor(Math.random()*ctx.canvas.width),Math.floor(Math.random()*ctx.canvas.height),1,1);
}
document.body.background = "url(\"" + ctx.canvas.toDataURL() + "\")";