const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.write("Hello world!")
})

app.listen(3000, ()=>{
    console.log("Server started");
});