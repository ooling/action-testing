
import { readdirSync, readFileSync } from 'node:fs';

import { minHTML, fetchDevPosts } from './minHTML.mjs';


let readFile = path => readFileSync('./src/'+ path, 'utf8');

let wrap =( tag, id, content )=>`<${ tag } ${ id!=='' ?'id='+id :'' }>${ content }</${ tag }>`;

let lnk =( txt, href, attr = '' )=> `<a href=${ href + attr } tabindex=0>${ txt }</a>`;

let script = name => `<script type=text/javascript>${ readFile(name +'.js') }</script>`;



let head =()=> readFile('head.html').replace(/(<\/head>)/, script('onload') +`<style>${

   readdirSync('./src/css/').map( file => readFile('css/'+ file) ).join('')
}</style>$1`);



let header =`<header id=head>   <h1><a href=/ >ooling</a></h1>   <nav>${[

   ['Home','#home'], ['About','#about']

].map( x => `<p>${lnk(x[0],x[1])}</p>` ).join('')}</nav> </header>`;



let home = wrap(
   'div', 'home', await ( async date =>
      ( await fetchDevPosts('ooling') ).map(
         ( post, position )=> position < 5 ?`
         <p>
            <span>${  date( post.readable_publish_date )} &bull; #${  post.tag_list[0]  }</span>
            ${  lnk(  post.title, post.canonical_url,' target=blank'  ) }
         </p>
         `: position < 6 ?`<p>${lnk('See more posts on dev.to','https://dev.to/ooling')}</p>`:''

      ).join('')
   )( date => date.length < 7 ? `${ date } '`+ new Date().getFullYear().toString().slice(2) : date )
);

let footer = '<footer>2023 &bull; <a href=/ >ooling</a></footer>';


let build = async()=> await minHTML(

   `<!DOCTYPE html><html lang=en class=light>${ head() }<body>${

      header + wrap('main','',

      home + wrap('div','about',readFile('about.html'))

      )+ script('main') + footer

   }</body></html>`

); export { build } ;
