const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Problem: Unexpected behavior when dealing with large requests, potential memory leaks, and lack of error handling.
//Solution: Stream handling, proper error handling and resource management.