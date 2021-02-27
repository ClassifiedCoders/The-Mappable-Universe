var es = new EventSource("/sse");
es.onmessage = (d)=>{
  if(JSON.parse(d.data).type == "connection"){
    s(JSON.parse(d.data).YourID);
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST","/sse/log");
  xhr.send(d.data);
};
function s(id){
  var xhr = new XMLHttpRequest();
  xhr.open("POST","/sse?id=" + id);
  xhr.send(JSON.stringify({
    opcode: "0000000",
    data: "yo"
  }));
}

const username = document.getElementById('username-input');
	
username.addEventListener('keydown', e => {
	document.getElemenyById('solo').innerHTML = username.value
});