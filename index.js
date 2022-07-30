const express = require('express')
const app = express()
const server = require('http').createServer(app)
const PORT = process.env.PORT || 80
const path = require('path')


// In dev mode just hide hide app.uss(... ) below
    if (process.env.NODE_ENV === "production") {
      app.use(express.static("build"));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,  "build", "index.html"));
      });
    }
server.listen( PORT, () => console.log('Server runnin @ ' + PORT ))