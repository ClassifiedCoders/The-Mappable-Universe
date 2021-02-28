var rout = require("express").Router();
var client = require("srnet-client");
rout.use(require("express").text());
var clis = {};
rout.get("/",(req,res)=>{
  res.writeHead(200,{"Content-Type":"text/event-stream"});
  var cli = new client("https://the-mappable-universe.classcoders.repl.co/server-" + req.query.path);
  res.socket.on("end",()=>{
    if(cli._cli.socket.readyState == "open"){
      cli.send("0000100","0");
    }
  });
  cli.on("notAsk",d=>{
    delete d.client;
    var a = {
      type: "data",
      data: d
    };
    if(res.socket.readyState == "open") res.write("data:" + JSON.stringify(a) + "\r\n\r\n");
  });
  cli.on("connect",id=>{
    clis[id] = cli;
    if(res.socket.readyState == "open") res.write("data:" + JSON.stringify({type:"connection",YourID:id}) + "\r\n\r\n");
  });
  cli.connect();
  setInterval(()=>{
    if(res.socket.readyState == "open"){
      res.write("event:ping\r\ndata:ping\r\n\r\n");
    }
  },1000);
});
rout.post("/",(req,res)=>{
  if(clis[req.query.id]._cli.socket.readyState == "open"){
    var json = JSON.parse(req.body);
    clis[req.query.id].send(json.opcode,json.data);
  }
});
rout.post("/log",(req,res)=>{
  console.log("\x1b[1m\x1b[33m[LOG]\x1b[m \x1b[1m" + req.body + "\x1b[m");
});
module.exports = rout;