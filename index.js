const express = require('express')
const { connection } = require('./config/db')
require('dotenv').config()
const cors = require("cors");
const { UserRouter } = require('./routes/user.route');
const { ItemRouter } = require('./routes/item.route');

const app = express()


app.use(express.json())


app.use(cors());

app.use("/user",UserRouter)

app.use("/item",ItemRouter)

app.listen(process.env.PORT,async()=>{
    try{
await connection
console.log('Connected to Db')
console.log(`Listening on PORT ${process.env.PORT}`)
    }catch(err){
        console.log(err)
        console.log("Error connecting to Db")
    }
})