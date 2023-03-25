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

db_connection() 

//ROUTES
const AuthRoute = require('./routes/auth');
app.use('/api', AuthRoute)
const donnationPartnerRoutes = require("./routes/donnation-partner");

db_connection()

app.use("donnation-partner" , donnationPartnerRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})



