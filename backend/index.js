const express = require ("express");
const mongoose = require ("mongoose");
const app = express();
const port = 8000;
app.listen(port, () =>{
    console.log(`Big Brother sur le port ${port}`)
})
mongoose.connect("mongodb://localhost:27017/lauguin", () => {
    console.log (`French "DB" Connection`)
})