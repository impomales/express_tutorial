var express = require('express')
var app = express()
/**
 * hello world app
 *
 */
 
app.get('/', function(req, res) {
    res.end('wuh?')
})
 
app.get('/home', function(req, res) {
    res.end('Hello World!')
})

app.listen(process.argv[2])