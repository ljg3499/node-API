const http = require("http");
const sharp = require("sharp");
const url = require("url");

const server = http.createServer((req, resp) => {
  resp.writeHead(200, {
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Content-Type": "application/json; charset=UTF-8"
  });
  let arg = url.parse(req.url, true).query;
  console.log(arg.name);
  let postData = "";
  req.on("data", chunk => (postData += chunk));
  req.on("end", () => {
    console.log(postData.toString());
    // res.end('{"name1":"华晨1"}');
  });

  let data = { name: 123 };
  data = JSON.stringify(data);
  //   resp.end({"name":123});
  resp.end(data);
});

server.listen(1234);
