// require('dotenv').config({ path: './env' })
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js"

import { app } from "./app.js";
dotenv.config({
    path: "./env"
}
)
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("Mongo dv connection failed !!!", err);
    })
// console.log("MONGODB_URL =>", process.env.MONGODB_URL);
// import express from "express"
// const app = express()
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONOGODB_URL}/${DB > NAME}`)
//         app.on("error", () => {
//             console.log("ERROR:", error);
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//        }) 
//     } catch (error) {
//         console.error("ERROR:", error)
//         throw err
//     }
// })()