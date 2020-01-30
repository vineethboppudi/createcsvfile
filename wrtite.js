const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const express = require("express");
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const app =express()
const port = 8080
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.get('/',(req,res) =>res.send("helloworld"))

app.post('/csv',(req,res)=>{
const data = req.body.data;
const header = req.body.header;
console.log("hie",req.body.header);

const csvWriter = createCsvWriter({
  path: 'vineeths.csv',
  header
});



csvWriter
  .writeRecords(data)
  .then(()=> res.send('The CSV file was written successfully'));

})

app.post('/upload', upload.single('key'), (req, res) => {
 
  //console.log(`new upload = ${req.file.filename}\n`);
  //console.log(req.file);
  res.json({msg: 'Upload File'});
});



// const csvWriter = createCsvWriter({
//   path: 'outses.csv',
//   header: [
//     {id: 'name', title: 'Name'},
//     {id: 'surname', title: 'Surname'},
//     {id: 'age', title: 'Age'},
//     {id: 'gender', title: 'Gender'},
//   ]
// });

// const data = [
//   {
//     name: 'John',
//     surname: 'Snow',
//     age: 26,
//     gender: 'M'
//   }, {
//     name: 'Clair',
//     surname: 'White',
//     age: 33,
//     gender: 'F',
//   }, {
//     name: 'Fancy',
//     surname: 'Brown',
//     age: 78,
//     gender: 'F'
//   }
// ];

// csvWriter
//   .writeRecords(data)
//   .then(()=> console.log('The CSV file was written successfully'));


app.listen(port,()=>console.log("working on", port))  