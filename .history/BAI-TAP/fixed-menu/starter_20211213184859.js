const header= document.querySelector(".header");
window.addEventListener("scroll", function(event){
   const scrollY= window.pageYOffset;
   console.log(scrollY);
   if(header){
      header.classList.add(".fixe")
   }
})