const express = require("express");
const app = express();
const port = 8000;

app.get("/Html", (req, res) => {
    res.write("<h1>Hello World</h1>"); // multiple res.write can be used unlike res.send
    res.write("<h2>Hello World Again</h2>");
    res.send(); // to stop the res.write res.write
});

app.get("/Json", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Sanket",
            color: "black"
        },
        {
            id: 2,
            name: "Pranav",
            color: "red"
        },
        {
            id: 3,
            name: "Nikhil",
            color: "blue"
        },
        {
            id: 4,
            name: "Ansh",
            color: "white"
        },
        {
            id: 5,
            name: "Harsh",
            color: "black"
        }
    ]) // Array of Objects
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});