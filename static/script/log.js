function log(msg){
  var xhr = new XMLHttpRequest();
  xhr.open("POST","/sse/log");
  xhr.send(msg);
}