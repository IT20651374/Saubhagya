const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db_connection = require("./database/index");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads'))

db_connection() 

//ROUTES
const AuthRoute = require('./routes/auth');
const NeedyPeopleRoute = require('./routes/needypeople');

app.use('/api', AuthRoute)
app.use('/api/needypeople', NeedyPeopleRoute)





app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})



