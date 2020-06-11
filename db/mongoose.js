//! Important keep the following require statment at the top no matter what
import dotenv from 'dotenv';
dotenv.config();
//! End here
import mongoose from "mongoose";
mongoose.connect(process.env.MONOGODB_CONNECTION_URL, {
  useNewUrlParser: true,
  useFindAndModify:false,
  useCreateIndex:true,
  useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});