import mongoose from "mongoose";

// Replace with your actual connection string
const url = `mongodb+srv://skiyani109:z0ne@cluster0.gvemw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error connecting to the database. \n${err}`));

// Optionally export mongoose connection if needed
export default mongoose;
