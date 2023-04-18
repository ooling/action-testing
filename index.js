let fs = require('node:fs');
const { minify } = require('https://esm.sh/v116/html-minifier-terser@7.2.0/es2022/html-minifier-terser.mjs');

console.log( minify );

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
