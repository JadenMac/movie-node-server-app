import * as dao from "./dao.js";

function ReviewsRoutes(app) {
  const findAllReviews = async (req, res) => {
    const reviews = await dao.findAllReviews();
    res.json(reviews);
  };

  const createReview = async (req, res) => {
    const { userId, movieId } = req.params;
    const review = await dao.createReview(userId, movieId, req.body);
    res.json(review);
  };
  const findMoviesUserReviewed = async (req, res) => {
    const { userId } = req.params;
    const reviews = await dao.findMoviesUserReviewed(userId);
    res.json(reviews);
  };

  const findUserReviewOfMovie = async (req, res) => {
    const { userId, movieId } = req.params;
    const review = await dao.findUserReviewOfMovie(userId, movieId);
    res.json(review);
  };

  const findUsersWhoReviewedMovie = async (req, res) => {
    const { movieId } = req.params;
    const reviews = await dao.findUsersWhoReviewedMovie(movieId);
    console.log("fetching reviews for movie");
    console.log(reviews);
    res.json(reviews);
  };

  const updateReview = async (req, res) => {
    const { reviewId } = req.params;
    const status = await dao.updateReview(reviewId, req.body);
    res.json(status);
  };

  app.get("/api/reviews", findAllReviews);
  app.post("/api/users/:userId/reviews/:movieId", createReview);
  app.get("/api/users/:userId/reviews/:movieId", findUserReviewOfMovie);
  app.get("/api/users/:userId/reviews", findMoviesUserReviewed);
  app.get("/api/movies/:movieId/reviews", findUsersWhoReviewedMovie);
  app.put("/api/reviews/:reviewId", updateReview);
 
}

export default ReviewsRoutes;