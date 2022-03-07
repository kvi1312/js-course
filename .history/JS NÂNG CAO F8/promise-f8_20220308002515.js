// sync / asyn
 // setTimeout, setInterval, fectch, xmlhttprequest, file reading, request animation frame : những thằng bất đồng bộ

 // để biết thằng nào trong những thằng bất đồng bộ xong thì sử dụng callback 

//trạng thái của promise : pending, resolve, reject
var promise = new Promise(
      //excutor   
   function(resolve, reject) {
      // thành công : resolve()
      // thất bại : reject()
      //fake call api
      resolve([
         {
            id: 1,
            name: 'javascript'
         }
      ]);
      
   }
);

//các phương thức của promise : then, catch, finally
promise
   // khi resolve đc gọi thì then chạy
   .then(function(courses){
      console.log(courses);
   })
   // khi reject đc gọi thì catch chạy
   // hiện lỗi đỏ in promise  = không bắt lỗi trong promise
   .catch(function(error){
      console.log(error);
   })
   // resolve hoặc reject đc gọi thì finally chạy
   .finally(function(courses){
      console.log("finally");
   })
   
// 2. promise chain : trong promise chain có thể gọi nhiều promise, nếu promise trước đó không return giá trị thì promise sau đó sẽ chạy

promise
.then(function(){
   return new Promise(function(resolve){
      setTimeout(resolve, 3000);
   })
})
.then(function(data){
   console.log(data);
}) // kết quả trả ra là undefined bởi vì resolve trước đó không return về dữ liệu gì

         //ví dụ
    function sleep(ms){
       return new Promise((resolve)=>{
         setTimeout(resolve, ms);
       });
    }

    sleep(1000) // thằng sleep(1000) lúc này đang là 1 promise
    .then(function (){
       console.log(1);
       return sleep(2000);
    })