var fs      = require('fs'),
    http    = require('http'),
    open    = require('open'),
    express = require('express');


const app     = express(),
      server  = http.createServer(app),
      options = JSON.parse(fs.readFileSync('package.json'));

app.use(express.static(options.webServer.folder));

server.listen(options.webServer.port, ()=>{
  console.log("web server started on port" + options.webServer.port);
  open("http://localhost:"+options.webServer.port);
});
