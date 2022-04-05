const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try{

        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        console.log('DB Connected');

    }catch (error){
        console.log(error);
        process.exit(1); //Stopping the app

    }
}
module.exports = conectarDB