const express = require('express');
const bodyParser = require("body-parser");
const {send} = require("process");
const app = express();
const port = 3000;

var cities = require('cities');
const res = require('express/lib/response');

app.use(bodyParser.urlencoded({extended: true}));


app.post("/cities", function (req, res){
    let zipcode = Number(req.body.zipcode);
    
    
   // console.log(cities.zip_lookup(zipcode))

   let _response = cities.zip_lookup(zipcode);

    //res.send("Zip Code: " +  _response.zipcode
  //  + " City: " + _response.city);
    res.send(`<p>Zip Code:${_response.zipcode}</p>
              <p>City: ${_response.city}</p>
              <p>City: ${_response.city}</p>
              <p>State: ${_response.state}</p>
              <p>State Abbr:${_response.state_abbr}</p>
              <p>Latitude:${_response.latitude}</p>
              <p>Longitude:${_response.longitude}</p>`)
   
    
   
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