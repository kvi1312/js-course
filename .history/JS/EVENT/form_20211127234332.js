const input = document.querySelector(".input");


// 1.keydown : khi nhấn xuống

input.addEventListener("keydown", function(event){
   console.log(event.key); //
   console.log(e.keyCode);
   console.log(e.which);
})