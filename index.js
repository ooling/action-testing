import('https://unpkg.com/browse/html-minifier-terser@7.2.0/dist/htmlminifier.esm.bundle.js');
let fs = require('node:fs');
const { minify } = require('html-minifier-terser');

console.log( minify );

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
