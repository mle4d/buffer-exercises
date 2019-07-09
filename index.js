const fs = require('fs');

const stream = fs.createReadStream('./copy.txt');
const writeStream = fs.createWriteStream('./copy.txt');

// stream.on('data', data => { 
//   writeStream.write(data);
// }); 

// stream.on('end', () => {
//   writeStream.end();
// });


stream
  .pipe(writeStream);

