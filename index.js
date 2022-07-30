const express = require('express')
const app = express()
const server = require('http').createServer(app)
const PORT = process.env.PORT || 80
const path = require('path')


// In dev mode just hide hide app.uss(... ) below
app.use( express.static(path.join(__dirname, '../build')))
server.listen( PORT, () => console.log('Server runnin @ ' + PORT ))