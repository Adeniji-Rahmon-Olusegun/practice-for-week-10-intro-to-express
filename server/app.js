const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("The server is live!");
})

app.listen(port, () => console.log(`Server is listening on port <${port}>`));