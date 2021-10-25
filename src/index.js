const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const app = express()
const port = process.env.PORT || 3001
app.use(express.json())
const userRouter = require('./routers/user.js')
app.use(userRouter)
const taskRouter = require('./routers/task')
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is up on port '+port)
})