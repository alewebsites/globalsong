document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".myBtn");
    
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        var paragraph = this.closest(".paragraph");
        var dots = paragraph.querySelector(".dots");
        var moreText = paragraph.querySelector(".more");
  
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          this.innerHTML = "Leer +"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          this.innerHTML = "Leer -"; 
          moreText.style.display = "inline";
        }
      });
    });
  });