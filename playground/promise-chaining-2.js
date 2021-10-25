require('../src/db/mongoose.js')
const Task = require('../src/models/task')
Task.findByIdAndDelete('6175dd9c296efc1c16cb18f7').then((task)=>{
    if(!task){
        console.log('No Such Task')
    }
    console.log(task)
    return Task.countDocuments({completed:false})
}).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)
})