window.addEventListener("scroll", function(){
   // console.log(scrollTop);
   const scrollTop = window.pageYoffset
   //tinh ra chieu cao that cua document
   const height = document.documentElement.scrollHeight - this.document.documentElement.cl;
   console.log(height);
})