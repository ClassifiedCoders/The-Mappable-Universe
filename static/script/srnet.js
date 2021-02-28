function Client(sn){
  for(var i of ["open","message","error"]){
    this["on" + i] = function(){};
  }
  this.where = sn;
  this.es = new EventSource("/sse?path=" + sn);
  this.es.onmessage = (d)=>{
    d = JSON.parse(d.data);
    if(d.type == "connection"){
      this.connected = true;
      this.id = d.YourID;
      this.send = (opcode,data)=>{
        var xhr = new XMLHttpRequest();
        xhr.open("POST","/sse?id=" + this.id);
        xhr.send(JSON.stringify({
          opcode,
          data
        }));
      };
      this.onopen(d.YourID);
    }else if(d.type == "data"){
      if(d.data.statusText == "PING") return;
      this.onmessage(d.data);
    }
  };
  this.connected = false;
}