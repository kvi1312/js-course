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
      resolve();
      
   }
);

//các phương thức của promise : then, catch, finally
promise
   // khi resolve đc gọi thì then chạy
   .then(function(){
     return 1;
   })
   .then(function(data){
     console.log(data);
      return 2;
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
   

   

   