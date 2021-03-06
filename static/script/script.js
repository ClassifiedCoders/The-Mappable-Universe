function getId(id) {
	return document.getElementById(id)
}

var cli;
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
setInterval(f,1000);
getId("server").onchange = (evt)=>{
  /*
if(cli){
  if(cli.connected){
    cli.send("0000100","0");
  }
}
cli = new Client(evt.target.value);

cli.onopen = id =>{
  //cli.send("0000000",id);
};

cli.onmessage = d =>{
  //log("#" + d.statusCode + " " + d.statusText + " -> " + d.message);
}
  */
};
getId("server").onchange({target:getId("server")});

const usr = localStorage.getItem('username') || "Player";

const username = getId('username-input');
username.value = usr;

username.addEventListener('change', e => {
	localStorage.setItem('username', username.value)
});

getId('solo').addEventListener('click', e => {
	location.href = '/solo?' + getId("server").value + "%7C" + encodeURIComponent(getId("username-input").value);
});

getId('multiplayer').addEventListener('click', e => {
	location.href = '/multiplayer?' + getId("server").value + "|" + encodeURIComponent(getId("username-input").value);
});