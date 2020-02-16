{
  'use strict';

  const sidebarElement = document.querySelector('.sidebar');
  const hamburger = document.querySelector('.hamburger');
  console.log(sidebarElement.classList.contains("active-short"));


  function shortSidebar(){
    if(sidebarElement.classList.contains("active-short") == true){
      sidebarElement.classList.remove("active-short");
      console.log(sidebarElement);
    }
    else{
      sidebarElement.classList.add("active-short");
    }

  }

  document.getElementById('hamburger').addEventListener('click', function(event){
    event.preventDefault();
    console.log('udalo sie')
    shortSidebar();
  })
}
