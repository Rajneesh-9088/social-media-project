// const posts = require("../../routes/posts");

let navlinks =  $('.navbar-nav .nav-link')
console.log('raj');

navlinks.click((ev) => {
    console.log('clicking')
   
  let componentUrl = `/components/${$(ev.target).attr('data-component')}.html`;
  $('#content').load(componentUrl)
})

