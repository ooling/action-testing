let fs = require('node:fs');
const { minify } = require('html-minifier-terser');

console.log( minify );

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
