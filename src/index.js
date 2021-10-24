const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3001
app.use(express.json())



app.post('/users',(req,res)=>{
    // res.send('testing!')
    console.log(req.body)
    const user = new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user)

    }).catch((error)=>{
        res.status(400)
        res.send(error)
    })
})
app.get('/users',(req,res)=>{
    User.find({})
        .then((users)=>{
            res.send(users)
        }).catch((error)=>{
            res.status(500).send(error)
    })

})
app.get('/users/:id',(req,res)=>{
    console.log(req.params)
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((error)=>{
        res.status(500).send(error)
    })

    }
)
app.get('/tasks/:id',(req,res)=>{
    console.log(req.params)
    const _taskId = req.params.id
    Task.findById(_taskId).then((task)=>{
        if(!task){
            return res.status(404).send('No such task!')
        }
        res.status(201).send(task)
    }).catch((error)=>{
        res.status(500).send(error)
    })

})

app.get('/tasks',(req,res)=>{
    Task.find({}).then((task)=>{
        res.status(200).send(task)
    }).catch((error)=>{
        res.status(404).send('Something went wrong!')
    })
})
app.post('/tasks',(req,res)=>{
    console.log(req.body)
    const task = new Task(req.body)
    task.save().then(()=>{
        res.status(201).send(task)
    }).catch((error)=>{
        res.status(400)
        res.send(error)
    })
})

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})