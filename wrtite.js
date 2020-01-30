const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const express = require("express");
const multer = require('multer');
const upload = multer({dest: 'uploads/'});// upload ur file destination path
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
  path: 'vineeths.csv',  // .csv file path 
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


app.listen(port,()=>console.log("working on", port))  