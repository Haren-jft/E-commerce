const express=require('express');
const app=express();
const dotenv=require('dotenv');
const UserRoute=require('./routes/user');
const AuthRouter=require('./routes/auth');
const ProductRouter=require('./routes/product');
const CartRouter=require('./routes/cart');
const OrderRouter=require('./routes/order');
const PaymentRouter=require('./routes/stripe');
const mongoose=require('mongoose');
const cors=require('cors');

mongoose.set('strictQuery',false);
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successful"))
.catch((err)=>{console.log(err)})

app.use('/api/user',UserRoute);
app.use('/api/auth',AuthRouter);
app.use('/api/products',ProductRouter);
app.use('/api/cart',CartRouter);
app.use('/api/order',OrderRouter);
app.use('/api/checkout',PaymentRouter);

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server Started`)
})