var srch = decodeURIComponent(location.search.replace(/^\?/,"")).split("|");
var serv = srch[0];
var name = decodeURIComponent(srch[1]);
var cli = new Client(serv);
cli.onopen = id =>{
  cli.send("0001000",name);
};

cli.onmessage = d =>{
  log("#" + d.statusCode + " " + d.statusText + " -> " + d.message);
};