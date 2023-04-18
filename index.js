let fs = require('node:fs');
const { minify } = require('https://esm.sh/html-minifier-terser');

console.log( minify );

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
