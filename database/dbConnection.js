import mongoose from "mongoose";

const dbConnection = (() => {
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database")
  }).catch(err => {
    console.log("Error connecting to Database", err)
  })
})

export default dbConnection;