const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('tasks',{
    description:{
        type:String,
        trim:true,
        required: true,
        validate(value){
            if(value.length<5){
                throw new Error('Enter more than 5 charecters')
            }

    }
    },
    completed:{
        type:Boolean,
        required:false,
        default:false,
    }
})
module.exports = Task