const express = require('express');
const debug = require('debug')('app');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "/pubilc/")));
app.get("/", (req, res) => {

    res.send('Hello foon');

})

app.listen(PORT, () => {
    debug("Listening on port ", PORT);
})