const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db_connection = require("./database/index");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middlewares
app.use(cors());
app.use('/uploads', express.static('uploads'))


//database connection
db_connection() 

//ROUTES
const userRoutes = require('./routes/users');
const AuthRoutes = require('./routes/auth');
const NeedyPeopleRoute = require('./routes/needypeople');
const FoodDonateRoute = require('./routes/donateroute'); 



app.use('/api/users', userRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/needypeople', NeedyPeopleRoute);
app.use('/api/donateroute', FoodDonateRoute);





app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})



