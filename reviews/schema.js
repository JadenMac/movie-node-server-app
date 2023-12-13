import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    description: { type: String, required: true},
    tmdb_id: {type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },

  },
  { collection: "reviews" });
export default reviewSchema;