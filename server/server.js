const express=require('express');
const data=require('./data.json');
const app=express();
let bodyParser = require('body-parser');
let cors = require('cors');
const { response } = require('express');
const fs = require('fs');
app.use(cors());
// let corsOptions={origin=""}
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/api/list',(request,response)=>{
response.send(data);
})

app.post('/api/form',(request,response)=>{
  let formData=request.body;
  console.log("data from form ",formData);
  let jsondata = JSON.stringify(formData);
  console.log("data from form after stringfy ",jsondata);
  fs.writeFile('data.json', jsondata);
  // data.push("hiiiii")
  // data.push(formData);

  console.log("arraya json file",data)
  response.status('200').json({message:'User Registered'});
})

app.listen(3000,()=>{
  console.log("listening on port 3000");
})
