import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("theaters", schema);

export default model;