const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.get('/tasks/:id', async (req,res)=>{
    // console.log(req.params)
    const _taskId = req.params.id
    try{
        const task = await Task.findById(_taskId)
        if(!task){
            return res.status(404).json({description:"no such task"})
        }
        res.status(201).send(task)
    }catch(e){
        res.status(500).send(e)
    }

})

router.get('/tasks',async(req,res)=>{
    try{
        const task = await Task.find({})
        res.status(200).send(task)
    }
    catch(err){
        res.status(404).send('Something went wrong!')
    }

})
router.post('/tasks',async (req,res)=>{
    // console.log(req.body)
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }catch(err){
        res.status(400).send(err)
    }
    // const task = new Task(req.body)
    // task.save().then(()=>{
    //     res.status(201).send(task)
    // }).catch((error)=>{
    //     res.status(400)
    //     res.send(error)
    // })
})
router.patch('/tasks/:id', async (req,res)=> {
    const allowedUpdates = ['description', 'completed']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send("Not a Valid property")
    }
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(404).send('No Such Task')
        }
        res.status(200).send(task)
    }
    catch(err){
        res.status(400).send(err)
    }
})
router.delete('/tasks/:id',async (req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send('No Such Task!')
        }res.send(task)
    }
    catch(err){
        res.status(500).send('Errored out!')
    }
})

module.exports = router