const express = require('express');
const app = express();

require('./utilities/firebase')

const ejs = require('ejs');
const User = require("./utilities/types/user.js");
const srnet = require("srnet-server");
var list = {};
var cmds = {
  "0001000": (obj)=>{
    list[obj.sender.socket.id] = new User(obj.chunk,obj.sender);
    obj.sender.socket.write("#110 ALL -> " + Object.keys(list).filter(x=>list[x].cli.socket.readyState == "open").map(x=>x + ":" + list[x].name + ":" + list[x].x + ":" + list[x].y).join(",") + "\r\n");
    obj.sockets.forEach(x=>{
      if(x.socket.readyState == "open"){
        if(x.socket.id != obj.sender.socket.id){
          x.socket.write("#108 JOIN -> " + obj.sender.socket.id + ":" + obj.chunk + "0:0" + "\r\n");
        }
      }
    });
  }
};
var server_usa = new srnet(cmds);
var server_asia = new srnet(cmds);
var server_europe = new srnet(cmds);
var _an = ["usa","asia","europe"];
setInterval(()=>{
  var i = 0;
  //console.log("--- Players ---");
  var json = {};
  for(var s of [server_usa,server_asia,server_europe]){
    json[_an[i]] = s._.sockets.map(x=>x.socket).filter(x=>x.readyState == "open").length;
    //console.log("/server-" + _an[i] + ": %O players",s._.sockets.map(x=>x.socket).filter(x=>x.readyState == "open").length);
    s._.sockets.map(x=>x.socket).forEach((x,___,arr)=>{
      if(x.readyState == "open"){
        x.write("#109 PING -> PING\r\n");
      }
    });
    i++;
  }
  require("fs").writeFileSync("static/users.json",JSON.stringify(json));
},1000);
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.static('static'));



app.use("/",require('./utilities/router.js'));
app.use("/sse",require("./utilities/sse.js"));

app.use("/server-usa",server_usa)
app.use("/server-asia",server_asia);
app.use("/server-europe",server_europe)
app.listen(65515, () => {
  for(var sn of ["usa","asia","europe"]){
    const client = require("srnet-client");
    const cli = new client("https://the-mappable-universe.classcoders.repl.co/server-" + sn);

    cli.on("connect",() => {
      console.log("SRNET server \"" + cli.url.pathname + "\" is working");
      cli.send("0000100","0");
    });
    
    cli.connect();
  }
});