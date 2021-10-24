const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{

    useNewUrlParser:true,
    useCreateIndex:true,
        useUnifiedTopology: true
}
)
//
// const me = new User({name:"Sam", age:40})
// me.save().then(()=>{
//     console.log(me)
// })
// .catch((error)=>{
// console.log('Error!', error)
// })
// const Task = mongoose.model('tasks',{
//     description:{
//         type:String,
//         trim:true,
//         required:true,
//     },
//     completed:{
//         type:Boolean,
//         required:false,
//         default:false
//     }
// })
// const task2 = new Task({description:'      cleaning     '})
//
// task1.save().then(()=>{
//     console.log(task1)
// }).catch((error)=>{
//     console.log('Error:', error)
// })

// const user2 = new User({name:'Sam       ',email:'     samCOnnECt@gmail.com    ',password:' njdns39923@!'})
//
// user2.save().then(()=>{
//     console.log(user2)
// }).catch((error)=>{
//     console.log(error)
// // })
// task2.save().then(()=>{
//     console.log(task2)
// }).catch((error)=>{
//     console.log(error)
// })