const mongoose = require("mongoose");

const uri="mongodb+srv://Chinmay:Chinmaya1412@cluster0.oifoows.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


//mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('Connected to MongoDB'))
//  .catch(error => console.error('Failed to connect to MongoDB:', error));

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(uri);

        console.log("Connected to MongoDB"); 

         
    }
  catch (error) {
        console.log("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB ;
