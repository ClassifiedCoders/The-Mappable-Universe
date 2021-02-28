const express = require('express');
const app = express();

require('./utilities/firebase')

const ejs = require('ejs');

const srnet = require("srnet-server");
const server = new srnet();
setInterval(()=>{
  server._.sockets.map(x=>x.socket).forEach(x=>{
    if(x.readyState == "open"){
      x.write("#109 PING -> PING\r\n");
    }
  });
},1000);
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(express.static('static'));



app.use("/",require('./utilities/router.js'));
app.use("/sse",require("./utilities/sse.js"));

app.use("/server",server);
app.listen(65515, () => {
  const client = require("srnet-client");
  const cli = new client("https://the-mappable-universe.classcoders.repl.co/server");

  cli.on("connect",() => {
    console.log("SRNET server is working");
    cli.send("0000100","0");
  });
  
  cli.connect();
});