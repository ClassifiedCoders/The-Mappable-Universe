var es = new EventSource("/sse");
es.onmessage = (d)=>{
  var xhr = new XMLHttpRequest();
  xhr.open("")
};