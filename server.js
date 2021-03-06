const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

//Get temperature and description from openweathermap
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})