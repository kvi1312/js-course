window.addEventListener("load", function(){
   const daysText = document.querySelector(".days");
   const hoursText = document.querySelector(".hours");
   const minutesText = document.querySelector(".minutes");
   const secondsText = document.querySelector(".seconds");
   function countdown(date){
      const now = new Date();
      //convert to timestamp
      const startDate = now.getTime();
      const endDate = new Date(date).getTime();
      //time remaining
      const timeRemaining = parseInt((endDate - startDate) /1000);
      console.log(timeRemaining);
   }
   countdown("Tue Jan 15 2022 17:48:19 GMT+0700 (Giờ Đông Dương)")
})