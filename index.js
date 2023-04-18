//import { minHTML } from './minHTML.mjs';
import { readdirSync } from 'node:fs';

console.log( process.env );

( async () => {
  
  readdirSync('./').forEach( v => console.log(v) );
  
})();
