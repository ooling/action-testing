let fs = require('node:fs');

let main = async () => {
  console.log(
    fs.existsSync('./test') && 'test folder exist'
  );
  //|| fs.mkdirSync('./test');
}

main();
