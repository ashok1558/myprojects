/*

Created by Ashok Mishra
Date 06-08-2017
*/

//importing required libraries
var http = require("http");

//Create HTTP server and listen on port 8000 for requests
http.createServer(function(request, response){

    // Set the response HTTP header with HTTP status and Content type
    response.writeHead(200,{"Content-type":"text/plain"});

    //setting response to any request
    response.end("Hello World\nHello America");
}).listen(9000);

//to notify that server is running on 127.0.0.1:8000
console.log('Server running at http://127.0.0.1:8000/');