const express = require('express');
const csv = require('csv-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const cors = require('cors');
const fs = require('fs');
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('hellos'));

app.post('/csv', upload.single('file'), async (req, res) => {
  let {file} = req;
  console.log(file);

  if (!file) {
    return res.status(400).json({message: 'You did not upload the csv file'});
  }

  let csvData = await csvReader(file);

  var filename = file.filename;

  await createTable(filename, csvData.headers);

  await insertCSVDataToTable(filename, csvData.headers, csvData.data);

  let tableData = await returnTableData(filename);

  res.json({message: 'All is well', tableData});
});


app.post('/upload', upload.single('keys'), (req, res) => {
  console.log(`new upload = ${req.file.filename}\n`);
  console.log(req.file);
  res.json({msg: 'Upload File'});
});

app.listen(port, () => console.log('serveris runing', port));
