const input = document.querySelector(".input");

//event.key :
//event.keyCode :
//event.which :

// 1.keydown : khi nhấn xuống

input.addEventListener("keydown", function(event){
   console.log(event.key); //
   console.log(event.keyCode);
   console.log(event.which);
})