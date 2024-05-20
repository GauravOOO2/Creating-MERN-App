const express = require('express')
const router = express.Router()
const {User} = require('../db')



router.post('/signUp', async(req, res)=>{
    // console.log(req.body.UserName);
    const  {UserName, password, email, phoneNumber } = req.body
    console.log(UserName, password, email, phoneNumber);
    const user = await User.findOne({
        UserName
    })
    if(user){
        res.status(403).json({
            message:"user already exists"
        })
    }else{
       const newUser = new User({
            UserName,
            password, 
            email, 
            phoneNumber
        })
        await newUser.save()
        res.json({
            message:"User Created Successfully"
        })
    }
})

module.exports = router