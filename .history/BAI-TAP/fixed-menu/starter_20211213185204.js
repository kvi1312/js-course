const header= document.querySelector(".header");
window.addEventListener("scroll", function(event){
   const scrollY= window.pageYOffset;
   console.log(scrollY);
   if(sc){
      header.classList.add("is-fixed");
   }else{
      !header &&header.classList.remove("is-fixed");
   }
})