const router=require('express').Router();
const User=require('../models/User');
const crypto=require('crypto-js');
const jwt=require('jsonwebtoken');
//REGISTER
router.post('/register',async (req,res)=>{
    const newUser=new User({
        username:req.body.username,
        email:req.body.email,
        password:crypto.AES.encrypt(req.body.password,process.env.ENCRYPTION_KEY).toString(),
    })
    try{
        const savedUser=await newUser.save();//this will save the data into the db
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

//LOGIN
router.post('/login',async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username});//to find the user
        !user && res.status(401).json("Wrong Credentials");
        const  decrypt =crypto.AES.decrypt(user.password,process.env.ENCRYPTION_KEY).toString(crypto.enc.Utf8);
        decrypt !== req.body.password && res.status(401).json("Invalid Password");
        //create jwt token
        const token=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        },process.env.JWT_SECRET,{
            expiresIn:'1h',
        });
        const {password,...others}=user._doc;//mongodb saves the documents in _doc 
        res.status(200).json({...others,token});
    }
    catch(err){
        console.log(err);
    }
})
module.exports=router;