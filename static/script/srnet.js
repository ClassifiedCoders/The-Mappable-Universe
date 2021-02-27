function Client(){
  for(var i of ["open","message","error"]){
    this["on" + i] = function(){};
  }
  this.es = new EventSource("/sse");
  this.es.onmessage = d=>{
    d = JSON.parse(d.data);
    if(d.type == "connection"){
      this.onopen(d.YourID);
    }
  };
  this.connected = false;
}