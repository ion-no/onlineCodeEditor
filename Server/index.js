const server = require('./server');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
console.log('Server Runnin');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening to -> ${PORT}`);
});

server();