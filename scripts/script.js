var link = document.querySelectorAll(".menu a");
 for (var i = 0; i < link.length; i++) {
  
  link[i].addEventListener("click", function(event) {
    
    event.preventDefault();
    
    var section = document.querySelector(this.getAttribute("href"));
    


    window.scroll({
      top: section.offsetTop, 
      left: 0, 
      behavior: 'smooth'
    });
    
  });
}

