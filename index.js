let fs = require('node:fs');

let main = async () => {
  fs.existsSync('./test') || fs.mkdirSync('./test');
  console.log('yo');
}

await main();
