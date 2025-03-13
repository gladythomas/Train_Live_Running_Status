const express=require('express');
const axios=require('axios');
const Train=require('../Models/trainModel');
const router=express.Router();
require('dotenv').config();


// creating a route to fetch train details and the save it to DB

router.post('/add-train', async(req,res)=>{

    const {trainNumber}=req.body;

    if(!trainNumber){
        return res.status(400).json({error:"Train Number is Required"});
    }

    const URL=`https://api.indianrailapi.com/v2/TrainStatus/apikey/${RAIL_API_KEY}/TrainNumber/${trainNumber}/`;

    try {
        const response= await axios.get(URL);
        const trainData=response.data;

        //  checking whether train data is available
        
        if(!trainData || trainData.TrainName){
            return res.status(404).json({error:"Train not found or invalid train details"});
        }

        // now after getting the data going to update the data in the DB

        const updateTrain=await trainData,findOneAndUpdate(
            {
                trainNumber:trainData.TrainName
            },
            {
                trainName: trainData.TrainName,
                departureTime: trainData.StartTime,
                arrivalTime: trainData.EndTime,
                status: trainData.Status,
                pnrDetails: [] // Can be added separately
            },
                {new :true, upsert:true}
        );

        res.json({ message: "Train details added successfully", train: updateTrain });
    } catch (error) {
        console.error("Error fetching train data:", error.message);
        res.status(500).json({ error: "Failed to fetch train details" });
    }



})

module.exports=router;


