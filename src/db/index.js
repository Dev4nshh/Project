import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstace = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        
        console.log(`\n MongoDBconected !! DB HOST: ${connectionInstace.connection.host}`);
    }
    catch (error) {
        console.log("mongodb error", error);
        process.exit(1);
    }
}
export default connectDB;