const mongoose = require('mongoose');
require('dotenv').config();

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('DB Connected');
    } catch (error) {
console.error("DB COnnection failed", error);
process.exit(1);
    }
};

module.exports=connectToDB;