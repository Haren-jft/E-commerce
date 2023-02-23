const router=require('express').Router();
const stripe=require('stripe')(process.env.STRIPE_KEY);

router.post('/payment',(req,res)=>{
    console.log(req.body);
    stripe.charges.create({
        source:req.body.tokenId, 
        amount:req.body.amount,
        currency:'USD',
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            console.log(stripeErr);
            res.status(500).json(stripeErr);
        }
        else{
            console.log('RES');
            res.status(200).json(stripeRes);
        }
    });
});

module.exports=router;