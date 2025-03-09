const express=require('express');
const dotenv=require ('dotenv');
const cors=require('cors');

dotenv.config();
const app=express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hello');
})

app.listen(3000);