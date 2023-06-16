const path = require("path");
const express = require('express');
const app = express();

const { readFile } = require('fs');
console.log("Node app working");

app.use(express.static(__dirname + '/static'));

app.get("/", (req,resp) => {
 readFile("./index.html", "utf8", (err,html) => {

    resp.send(html).status(200);
    if(err) {
        htmlErr();
    }
 });
    
});

//redirect
app.get("/twitter", (req,resp) => {
    resp.redirect("https://twitter.com/_AviRana").status(302);
});
app.get("/github", (req,resp) => {
    resp.redirect("https://github.com/Avi-Rana-1718").status(302);
})



app.listen(3000);



//func
function htmlErr() {
    readFile("./404.html", "utf8", (err,html) => {

        resp.send(html).status(404);
    });
}