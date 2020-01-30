 const fs = require("fs");
  let writestream = fs.createWriteStream('out.csv');

   writestream.write("sghjghjnvnn","base64");
   writestream.on( 'finish', () =>{
       console.log("wrote all the data");

})
writestream.end();
