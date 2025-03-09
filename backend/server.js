const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDB = require('./db/db');

dotenv.config();
connectToDB();
const app = express();

app.use(express.json());
app.use(cors());

//Routes

const userRoutes=require('./Routes/userRoutes');
app.use("/api/users",userRoutes);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>hello<h1>');
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});