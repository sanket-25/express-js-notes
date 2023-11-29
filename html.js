const express = require("express");
const app = express();
const port = 8000;

// express.static(root, [options])
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});