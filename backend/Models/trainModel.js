
const mongoose=require('mongoose');

const trainSchema=new mongoose.Schema({
    trainName:String,
    trainNumber:String,
    departureTime:String,
    arrivalTime:String,
    status:String,

    pnrDetails:[
        {
            pnrNumber:String,
            passengers:[
                {
                    name:String,
                    age:Number,
                    seatNumber:String
                }

            ],
            chartPrepared:boolean
        }
    ]
});

module.exports=mongoose.model('Train', trainSchema);