const carrierHandler = require("./CarrierHandler");


http.createServer((req, res) => {

  const url = req.url;
  const method = req.method;
  
  const body = [];

  if (url === "/" && method === "POST") {
    req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk);
  };
  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    message = parsedBody.split('=')[1];
    var items = JSON.parse(con);
    console.log("items from TCC", items);
    carrierHandler.notifyCarrier(items); // 

  });
 
  res.statusCode = 200; // OK
  return res.end();
}
});

server.listen(PortForTCC);