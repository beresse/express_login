const express = require("express");
const mongoose = require("mongoose");
const usersModel = require("./models/users");
const bodyParser = require("body-parser")
const app = express();
const port = 8000;
app.listen(port, () => {
    console.log(`Big Brother sur le port ${port}`)
})
mongoose.connect("mongodb://localhost:27017/lauguin", () => {
    console.log(`French "DB" Connection`)
})
app.use(bodyParser.json());

app.post("/users", async (req, res) => {
    await usersModel.create(req.body);
    res.send("Welcome to the real world, neo");
})


app.post("/users", async (req, res) => {
    try {
        await usersModel.create(req.body);
        res.send("Welcome to the real world, neo");
    } catch (err) {
        console.log(err);
        res.status(500).send("Hello, Mr Anderson")
    }

})