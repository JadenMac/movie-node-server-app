import model from "./model.js";

export const findAllReviews = () => model.find();
export const createReview = (userId, movieId, review) =>
  model.create({...review, user: userId, tmdb_id: movieId });
export const findMoviesUserReviewed = (userId) => model.find({ user: userId });
export const findUsersWhoReviewedMovie = (movieId) =>
  model.find({ tmdb_id: movieId });
export const findUserReviewOfMovie = (userId, movieId) => model.findOne({ user: userId, tmdb_id: movieId });
export const updateReview = (reviewId, review) =>
  model.updateOne({ _id: reviewId }, { $set: review });
