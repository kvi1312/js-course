// PROMISE.RESOLVE
// PROMISE.REJECT
// PROMISE.ALL

const promise = new Promise(
   function(resolve, reject){
      resolve('success')
});

promise
   .then(()=>{
      console.log('result:', r);
   })