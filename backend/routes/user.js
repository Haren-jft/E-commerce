const router=require('express').Router();
const User = require('../models/User');
const crypto=require('crypto-js');
const {verifyTokenAndAuthorization, verifyTokenAndAdmin}=require('./verifyUserToken');
//update
router.put('/:id',verifyTokenAndAuthorization,async(req,res)=>{
    if(req.body.password){
        req.body.password=crypto.AES.encrypt(req.body.password,process.env.ENCRYPTION_KEY).toString();
    }
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }
})
//delete
router.delete('/:id',verifyTokenAndAdmin,async (req,res)=>{
    try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Deleted Successfully");
    }catch(err){
        res.status(400).json(err);
    }
})
//get user
router.get('/find/:id',verifyTokenAndAdmin,async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        const {password,...others}=user._doc;
        res.status(200).json(others);
    }   
    catch(err){
        res.status(500).json(err);
    }
})
//get all users
router.get('/',verifyTokenAndAdmin,async (req,res)=>{
    const query=req.query.new;
    //latest records
    try{
        const users=query ? await User.find({}).sort({_id:-1}).limit(3) : await User.find({});
        const Users=users.map((user)=>{
            const {password,...others}=user._doc;
            return others;
        })
        res.json(Users);
    }
    catch(err){
        res.status(500).json(err);
    }
})
//Get user stats
router.get('/stats',verifyTokenAndAdmin,async (req,res)=>{
    const date=new Date();
    const lastYear=new Date(date.setFullYear(date.getFullYear()-1));
    try{
        const data=await User.aggregate([
            { $match:{ createdAt:{$gte:lastYear} } },
            {
                $project:{
                    month:{$month:"$createdAt"},
                },
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1},//$sum=1 will count all the users
                },
            }
        ]);
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports=router;