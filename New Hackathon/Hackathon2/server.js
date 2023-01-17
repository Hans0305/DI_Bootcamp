const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const knex = require ('knex');
const DB = require('./db.js')
// const bp = require('body-parser');
const {createCustomer} = require('./db.js')



const db = knex({
  client:'pg',
  connection:{
    host: '127.0.0.1',
    port: '5555',
    user: 'postgres',
    password: 'ght25ater',
    database: 'Animal Clinic'
  }
});


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',express.static(__dirname+'/express'));

// app.post('/custdata',(req,res)=>{
//   console.log(req.body);
//   DB.createCustomer(req.body)
//   .then(data => {
//     res.send({message:'OK'})
//   })
//   .catch(err => {
//     res.send({message:err.detail})
//   })
// })


// app.post('/', (req, res) => {
//   db('Animal Clinic')
//       .returning(['custid', 'name', 'petname', 'appreason', 'phonenumber', 'appdate'])
//       .insert({ name:'ares', petname:'tom', reason:'Grooming', number:'51123123', date:"27/01/2023" })
//       .then(AnimalClinic =>
//           res.send(AnimalClinic)
//       )
// })


app.post('/custdata', (req, res)=>{
  console.log(req.body)
  // const {name, petname, reason, number, date} = req.body
  createCustomer(req.body)
.then(data => {
  console.log(data)
  res.json(data)
})
.catch(err => {
  res.send({message:err.detail})
})
})




// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });
const server = http.createServer(app);
const port = 4000;
server.listen(port);
console.debug('Server listening on port ' + port);

