const collapsibles = document.querySelectorAll(".collapsible");  // class collapsible
collapsibles.forEach((item) =>    
  item.addEventListener("click", function () {   //addEventListener("click", function(){})
    this.classList.toggle("collapsible--expanded");
  })
);