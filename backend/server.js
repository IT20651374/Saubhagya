const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db_connection = require("./database/index")

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//ROUTES
const indexRoutes = require("./routes/index");
const foodRoutes = require("./routes/food")

db_connection()

app.use("/", indexRoutes)
app.use("food" , foodRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})