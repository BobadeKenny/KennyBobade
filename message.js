var http = require("http");
var fs = require('fs')
http.createServer(function(req, res) {
    console.log(req, res);
    if (req.method==='POST') {
    	getMessage(req)
    }
    var file = buildPage(req)

			res.writeHead(200, { "Content-Type": "text/html" });
    		res.write(file);
    		res.end();
		})
.listen(8080);



function buildPage(req) {
	return ("<!DOCTYPE html>" +
"<html><head>" +
"</head><body>" +
"<form method='POST' action='/message'>" +
	"<p>Please Enter A Message Below:</p>" +
	"Message: <input type='text' name='message'>" +
	"<br>" +
	"<button>Submit</button>" +

"</form></body></html>")
}

function getMessage(req){
	let body = '';
	req.on('message',chunk =>{
		body+=chunk.toString();
	});
	if (body) {
	var saveMessage = fs.writeFile('message.txt')
	saveMessage.end(body)
}
	return;
}