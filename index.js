import { minHTML } from './minHTML.mjs';
import { readdirSync } from 'node:fs';

console.log( minHTML );

( async () => {
  
  readdirSync('./').forEach( v => console.log(v) );
  
})();
