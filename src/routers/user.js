const express = require('express')
const User = require("../models/user");
const router = new express.Router()

router.post('/users',async (req,res)=>{
    // res.send('testing!')
    const user = new User(req.body)

    try{
        await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)
    }


})
router.get('/users',async (req,res)=>{
    try{
        const users = await User.find({})
        res.status(200).send(users)
    } catch(e){
        res.status(400).send(e)
    }

})




router.get('/users/:id',async (req,res)=>{
        // console.log(req.params)
        const _id = req.params.id
        try{
            const user = await User.findById(_id)
            if(!user){
                return res.status(404).send('No such user')
            }
            res.send(user)

        }catch(e){
            res.status(500).send(e)
        }

    }
)

router.patch('/users/:id', async (req,res)=>{
    console.log(req.body)
    const allowedUpdates =['name','email','age','password']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).json({item:"no such property"})
    }
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user){
            return res.status(404).json({name:'User Doesnt exist!'})
        }res.send(user)
    }
    catch(e){
        res.status(400).send(e)
    }
})


router.delete('/users/:id',async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(400).send('No Such User!')
        }
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err)
    }
})

module.exports = router

