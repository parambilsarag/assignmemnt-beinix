const express = require("express");
const data = require("./data.json");
const datas=require('./register.json')
const app = express();
let bodyParser = require("body-parser");
let cors = require("cors");
const { response } = require("express");
const fs = require("fs");
app.use(cors());
// let corsOptions={origin=""}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/list", (request, response) => {

  fs.readFile('./data.json', 'utf-8', function(err, data) {
    if (err) throw err
  })
  response.send(data);
});

app.post("/api/form", (request, response) => {
  let formData = request.body;
  let jsondata = JSON.stringify(formData);

  fs.readFile('./data.json', 'utf-8', function(err, data) {
    if (err) throw err

    var arrayOfObjects = JSON.parse(data)
    arrayOfObjects.push(formData)
    fs.writeFile('./data.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
      if (err) throw err
    })

  })

});


//new user registration

app.post("/api/register", (request, response) => {
  let formData = request.body;
  let jsondata = JSON.stringify(formData);

  fs.readFile('./register.json', 'utf-8', function(err, data) {
    if (err) throw err

    var arrayOfObjects = JSON.parse(data)
    arrayOfObjects.push(formData)
    fs.writeFile('./register.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
      if (err) throw err
    })

  })

});


app.get("/api/logindetails", (request, response) => {

  fs.readFile('./register.json', 'utf-8', function(err, datas) {
    if (err) throw err

  })

  response.send(datas);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
