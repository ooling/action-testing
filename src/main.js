
let locHash,

   htdoc = document,

   { log } = console,

   qs = htdoc.querySelector.bind(htdoc),
   qsA = htdoc.querySelectorAll.bind(htdoc),

   $class = 'class',
   slideUp = 'slideUp',
   fadeOut = 'fadeOut',
   visible = 'visible',

   waitMs = number => new Promise( resolve => setTimeout(resolve,number)  ),
   
   removeEmptyClass = element => {
      element.getAttribute( $class ) || element.removeAttribute( $class )
   },
   visibleClass = classList => { classList.add(slideUp); classList.add(visible) }
;

// console.log(1);
// console.log(
//    (( dat, xhr = new XMLHttpRequest() )=>{
//       xhr.onreadystatechange = () => {
//          if ( xhr.readyState == XMLHttpRequest.DONE ) dat = 2
//       }; xhr.open(
//          'GET','/zDevPosts.json', false
//       ); xhr.setRequestHeader('Accept','application/json'); xhr.send();
//       return dat
//    })()
// );
// let xhr = new XMLHttpRequest() , json = void 0;
// xhr.onreadystatechange = () => {
//    if ( xhr.readyState == XMLHttpRequest.DONE ) console.log(2);
// }; xhr.open(
//    'GET','/zDevPosts.json'
// ); xhr.setRequestHeader('Accept','application/json'); xhr.send();
// console.log(3);

qsA('main>div').forEach( div =>
   div.onanimationend = $event => waitMs(8).then(
      ( divClass = $event.target.classList ) => {

         divClass.contains( slideUp ) && divClass.remove( slideUp ) ;
         divClass.contains( fadeOut ) && [ fadeOut, visible ].forEach(
            item => divClass.remove( item )
         ); removeEmptyClass( $event.target )
      }
   )
);

/*--- Router ---*/ 
onpopstate = () => {
   
   locHash = location.hash.slice(1) ; qsA('nav a').forEach( navItem => waitMs(8).then(

      ( pageId = navItem.hash.slice(1), divClass = qs( '#'+ pageId ).classList ) => {

         divClass.contains( slideUp ) && divClass.remove( slideUp );

         if ( pageId == locHash ) {

            if ( divClass.contains( visible ) ) return;

            navItem.className = 'active';

            if ( divClass.contains( slideUp ) ) {

               divClass.remove( slideUp ) ; visibleClass( divClass )

            } else visibleClass( divClass )
         } else {

            divClass.contains( visible ) && divClass.add( fadeOut );
            navItem.removeAttribute( $class )
         }
      }
   ))
}; onpopstate();
