const http = require('http');
const os = require('os');

//----------------------------------------------------------------
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Trying the os lib
//    all methods are related

console.log(os.homedir());
console.log(os.totalmem());
const jsonCpu = os.cpus();

console.log('The 1 Cpu Models', jsonCpu[0].model);
console.log('The 1 Cpu Speed ', String(jsonCpu[0].speed / 1000) + ' Ghz');
