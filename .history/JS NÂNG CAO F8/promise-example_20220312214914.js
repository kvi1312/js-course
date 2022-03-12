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

function getCmt(){
   return new Promise((resolve, reject) => {
      setTimeout(function(){
         resolve(comments)
      },1000)
   })
}

getCmt()
.then(function(comments){
   console.log(comment);
})