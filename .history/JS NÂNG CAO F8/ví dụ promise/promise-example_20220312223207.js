const users = [
   {
      id: 1,
      name: 'Tran Quang Huy',
   },
   {
      id: 2,
      name: 'Sơn ĐẶng',
   },
   {
      id: 3,
      name: 'Nguyen Van B',
   }
]

const comments = [
   {
      id:1,
      user_id:1,
      content : 'chưa ra video a ơi'
   }
   ,{
      id:2,
      user_id: 2,
      content: 'vừa nộp ra xong bạn ơi'
   }
]
//B1: lấy cmnt
//B2: lấy user
//B3: lấy ra user id tương ứng với user_id

//fake api

function getUserByIds(userIDs){
   return new Promise((resolve, reject) => {
      var result = users.filter((user)=>{
         return userIDs.includes(user.id)
      })
      resolve(result)
   })
}
function getCmt(){
   return new Promise((resolve, reject) => {
      setTimeout(function(){
         resolve(comments)
      },1000)
   })
}
getCmt()
   .then(function(comments){
      const user_ids = comments.map(function(comment){
         return comment.user_id;
      })
      return getUserByIds(user_ids) //đây là promise chain
         .then(function(users){
            return {
               users: users,
               console.log(object);
               comments: comments,
            }
      })
   })
   .then(function(obj){
      var commentBlock = document.getElementById('comment-block');
      let html ='';
      obj.comments.forEach(function(comment){
         const user = obj.users.find((user)=>{
            return user.id === comment.user_id;
         })
         html = `<li>${user.name} : ${comment.content}</li>`
      })
      commentBlock.innerHTML = html;
   })


