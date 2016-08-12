var fs = require('fs')
var express = require('express')
var app = express()

app.get('/books', function(req, res) {
    fs.readFile(process.argv[3], function(err, data) {
        if (err) res.send(5000)
        
        res.send(JSON.parse(data))
    })
})

app.listen(process.argv[2])