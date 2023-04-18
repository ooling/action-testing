let fs = require('node:fs');
const { minify } = require('https://unpkg.com/browse/html-minifier-terser@7.2.0/dist/htmlminifier.esm.bundle.js');

console.log( minify );

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
