import mongoose from "mongoose";
const theaterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true, unique: true },

  },
  { collection: "theaters" });
export default theaterSchema;