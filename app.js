const express = require('express');
const debug = require('debug')('app');

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    res.send('Hello World555');

})

app.listen(port, () => {
    debug("Listening on port ",port);
})