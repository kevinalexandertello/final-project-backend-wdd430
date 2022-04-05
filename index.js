const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//Creating the server
const app = express();

//Connecting to DB
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));



app.listen(4000, () => {
    console.log('Server is running perfectly')
})