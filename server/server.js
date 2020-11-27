const express=require('express');
// const data=require('./data.json');
const app=express();
let bodyParser = require('body-parser');
let cors = require('cors');
app.use(cors());
// let corsOptions={origin=""}
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/api/list',(request,response)=>{
  let fomrData=request.body;
  console.log(formData);
  data.push(formData);
  response.status('200').json({message:'User Registered'});
})

app.listen(3000,()=>{
  console.log("listening on port 3000");
})
