
(l=>{
   if (l.hash === '') l.hash = '#home';
   document.className = localStorage.getItem('theme') || 'light'
})(location);
