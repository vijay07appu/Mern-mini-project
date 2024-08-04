import mongoose from "mongoose";


const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`mongodb+srv://tryvijay07appu:tryvijay07appu123@cluster1.wm8cksb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`);
        console.log("MongoDB connected");
       
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDB