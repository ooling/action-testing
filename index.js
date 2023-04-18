import { minHTML } from './minHTML.mjs';
let fs = require('node:fs');

console.log( minHTML );

( async () => {
  
  fs.readdirSync('./').forEach( v => console.log(v) );
  
})();
