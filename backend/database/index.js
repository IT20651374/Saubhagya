require("dotenv").config();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const db_connection = async()=>{
    mongoose.connect(DB_URL , { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true })

        .then(res=>{
            console.log("DB Connected successfully")
        })

        .catch(err=>{
            console.log("Error " + err)
        })

    }

module.exports = db_connection;