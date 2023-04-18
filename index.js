let fs = require('node:fs');

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
