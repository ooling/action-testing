let fs = require('node:fs');
let { minHTML } = require('./minHTML.mjs');

console.log( minHTML );

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
