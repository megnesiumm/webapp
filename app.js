const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/pubilc/")));
app.get("/", (req, res) => {

    res.send('Hello foon');

})

app.listen(port, () => {
    debug("Listening on port ", port);
})