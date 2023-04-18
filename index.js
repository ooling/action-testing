let fs = require('node:fs');
const { minify } = require('./htmlminifier.umd.bundle.min');

console.log( minify );

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
