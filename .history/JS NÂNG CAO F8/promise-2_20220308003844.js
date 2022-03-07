// PROMISE.RESOLVE
// PROMISE.REJECT
// PROMISE.ALL

const promise = new Promise(
   function(resolve, reject){
      resolve('success')
      reject('error')
});

promise
   .then((result)=>{
      console.log('result:', result);
   })
   .catch((error)=>{
      console.log('error:', error);
   })