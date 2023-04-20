
await import('./htdocMinify.mjs').then( async html => { try {

   await html.build().then( async data =>

      await html.octokitUpdateFile(

         process.env.SECRET_AUTH, 'ooling', 'samooling@gmail.com',
         'SamXuLing', 'index.html', data, 'Upload using Octokit'
      
      )
   )
}  catch (err){ console.log(err) } } ) ;
