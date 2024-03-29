// các trạng thái của promise :  pending, resolve , reject
// CÁC PHƯƠNG THỨC: all, race, allsettled (chạy hết 1 lần)
// các THUỘC TÍNH của promise : then, catch, finally
// new Promise(function(resolve, reject) => {})

let buyIphone = true;

let willBuyIphone = new Promise((resolve, reject) => {
   setTimeout(() => {
      if (buyIphone) {
         resolve('i have new iphone');
         console.log('ok');
      } else {
         reject(' i dont have new iphone');
         console.log('not ok');
      }
   },3000);
})
console.log(willBuyIphone);

   // 1. then (onFullFilled, onRejected)

   function makePromise(buyIphone){
      return new Promise (function(resolve,reject){
         setTimeout(() => {
            if (buyIphone) {
               resolve('oh yeah!! i have new iphone');
            } else {
               reject(' NO!!! i dont have new iphone');
            }
         },3000);
      })
   }
   let haveIPhone = makePromise(false);
   haveIPhone
   .then( 
      success => console.log(success), //đây là call back . lúc này success là giá trị trả về của resolve
      // reason => console.log(reason) //đây là call back. lúc này reason là giá trị trả về của reason
   )
   .catch((error) =>{
      console.log(error);
   })
   .finally(()=>{
      console.log('im still happy');
   })

   //2. catch : dùng để back lỗi khi rejected

   //bai tap
   new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve ('1.run the first time');
      }, 3000);
   })

   .then((value) => {
      console.log(value);
      return new Promise((resolve, reject) => {
         setTimeout(()=>{
            resolve('2.run the second time');
         },1000);
      });
   })
   .then((value)=>{ // luc nay value la gia tri tra ve cua promise 2
      console.log(value);
      return new Promise((resolve, reject) => {
         setTimeout(()=>{
            resolve('3.run the third time');
         },1000);
      })
   })
   .then((value) => { //value luc nay la gia tri tra ve cua promise 3
      console.log(value);
   })


   //all : hoàn thành tất cả cùng lúc. trả về resolve khi tất cả đều resolve, trả về reject khi 1 trong những promise reject

   function makeTimer(time = 1000, str){
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            resolve(str);
         }, time);
      })
   }

   const timer1 = makeTimer(1000, 'timer 1');
   const timer2 = makeTimer(2000, 'timer 2');
   const timer3 = makeTimer(3000, 'timer 3');
   const timerTotal = Promise.all([timer1, timer2, timer3]).then((data) => {
      console.log(data);
   });

   //race: chạy thằng nhanh nhất. có thể là thằng reject hoặc là thằng resolve
   const timerRace = Promise.race([timer1, timer2, timer3]).then((data2) => {
      console.log(data2);
   })

   //PROMIS.allSettled : trả về 1 mảng lẫn resolve và reject

   function isFrontEndDev(languages){
      return new Promise(function(resolve, reject){
         if(!languages.includes('html')){
            reject('you are not front end developer');
         }
         setTimeout(() => {
            resolve('you are front end developer');
         } , 1000)
      })
   }
   const dev1= isFrontEndDev(['html', 'css', 'js']);
   const dev2 = isFrontEndDev(['css', 'js', 'php']);

   const devAll = Promise.allSettled([dev1, dev2]).then((data) => {
      console.log(data);
   });