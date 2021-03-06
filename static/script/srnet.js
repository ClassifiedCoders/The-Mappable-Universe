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
      log("/server-" + cli.where + ": SRNET Connection " + new Date().toUTCString() + "\n" +
          "     Language: " + navigator.language + "\n" +
          "     Platform: " + navigator.platform + "\n" +
          "     Browser: " + navigator.userAgent.split("/").filter((x,i,d)=>{
            return d.length - i < 3;
          }).join("/"));
      this.onopen(d.YourID);
    }else if(d.type == "data"){
      if(d.data.statusText == "PING") return;
      this.onmessage(d.data);
    }
  };
  this.connected = false;
}