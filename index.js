//Load express module with `require` directive
var express = require('express')
var Request = require("request")
var app = express()


 
//Define request response in root URL (/)
app.get('/*', function (req, res) {
   
 
  res.send("Order Scammer. Recieved. Processing started...\n" )
})

//Launch listening server on port 8090
app.listen(8090, function () {
  console.log('Order service listening on port 8090!')
})
