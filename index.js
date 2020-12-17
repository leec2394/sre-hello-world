// Load the express module
var express = require('express')
var app = express()

// Define request response in root url and serve response
app.get('/', function (req, res) {
  res.send('Hello World! - SRE Role')
})

// Launch server on port 8080 and log to console
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})