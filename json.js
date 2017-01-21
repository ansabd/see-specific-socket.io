var http = require('http');
var options = {
  host: 'ultimatefun.comli.com',
  port: 80,
  path: '/submit',
  method: 'POST'
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('connection', function (chunk) {
    console.log('Connected');
  });
});

req.write("my data");
req.write("more of my data");

req.end();
