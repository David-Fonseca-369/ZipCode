const express = require('express');
const bodyParser = require("body-parser");
const {send} = require("process");
const app = express();
const port = 3000;

var cities = require('cities');

app.use(bodyParser.urlencoded({extended: true}));


app.post("/cities", function (req, res){
    let zipcode = Number(req.body.zipcode);
    
    
   // console.log(cities.zip_lookup(zipcode))
    res.send(cities.zip_lookup(zipcode));
});

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get("/cities", function(req, res){
    res.sendFile(__dirname + "/cities.html")
});





app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})