import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
