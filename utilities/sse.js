var rout = require("express").Router();
var client = require("srnet-client");
rout.get("/",(req,res)=>{
  res.writeHead(200,{"Content-Type":"text/event-stream"});
  var cli = new client("https://the-mappable-universe.classcoders.repl.co/server");
  cli.on("notAsk",d=>{
    delete d.client;
    res.write("data:" + JSON.stringify(d) + "\r\n\r\n");
  });
  cli.on("connect",id=>{
    cli.send("0000000",id);
  });
  cli.connect();
});
rout.use("/log",require("express").text());
rout.post("/log",(req,res)=>{
  console.log(req.body);
});
module.exports = rout;