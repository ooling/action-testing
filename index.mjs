

await import('./htdocMinify.mjs').then( async html =>

   await import('node:fs').then( async fs => { try {

      await html.build().then( result => {

         fs.writeFileSync('./index.html', result);
         console.log('build success')
      })
   }  catch (err){ console.log(err) } } )
)  ;
