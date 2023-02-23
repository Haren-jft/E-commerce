const { verifyTokenAndAdmin } = require('./verifyUserToken');
const Product=require('../models/Product');

const router=require('express').Router();
//Create
router.post('/',verifyTokenAndAdmin,async (req,res)=>{
    const newProduct=new Product(req.body);
    try{
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        res.status(500).json(err);
    }
})
//update
router.put('/:id',verifyTokenAndAdmin,async(req,res)=>{
    try{
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err);
    }
})
//delete
router.delete('/:id',verifyTokenAndAdmin,async (req,res)=>{
    try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product Deleted Successfully");
    }catch(err){
        res.status(400).json(err);
    }
})
//get product
router.get('/find/:id',async (req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.status(200).json(product._doc);
    }   
    catch(err){
        res.status(500).json(err);
    }
})
//get all products
router.get('/',async (req,res)=>{
    const qNew=req.query.new;//latest records
    const qCategory=req.query.category;//fetch by category
    try{
        let products;
        if(qNew){
            products=await Product.find().sort({createdAt:-1}).limit(4);
        }
        else if(qCategory){
            products=await Product.find({categories:{
                $in:[qCategory],
            }});
        }
        else{
            products=await Product.find({});
        }
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports=router;