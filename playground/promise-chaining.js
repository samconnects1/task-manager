require('../src/db/mongoose.js')
const User = require('../src/models/user')

User.findByIdAndUpdate('6175e6249351f96c23e512fd',{age:1}).then((user)=>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})