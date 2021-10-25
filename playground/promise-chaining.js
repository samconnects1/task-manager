require('../src/db/mongoose.js')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6175e6249351f96c23e512fd',{age:10}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })
const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age:age})
    const count = await User.countDocuments({age:age})
    return count
}
let _id= '6175e6249351f96c23e512fd'
updateAgeAndCount(_id,30).then((count)=>{
    console.log(count)
}).catch((err)=>{
    console.log(err)
})

//
// const updateAge= (id,age)=> {
//     User.findByIdAndUpdate(id, {age: age}).then((user)=>{
//         if(!user){
//             console.log('No such user')
//         }
//         return console.log(user)
//     }).catch((e)=>{
//         console.log(e)
//     })
// }
// updateAge('6175e6249351f96c23e512fd',20)