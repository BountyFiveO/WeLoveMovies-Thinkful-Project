const service = require("./reviews.service");
const asyncErrorBoundary = require("../Errors/asyncErrorBoundary")
async function list(req, res) {
    const reviews = await service.list();
    res.status(200).json({data:reviews});
}


async function read(req, res) {
    res.status(200).json({data: res.locals.review});
}

async function reviewExists(req, res, next) {
    const review = await service.read(req.params.reviewId);
  
    if (review) {
      res.locals.review = review;
      return next();
    }
    next({ status: 404, message: `Review cannot be found.` });
  }
  
  async function destroy(req, res) {
    await service.destroy(res.locals.review.review_id);
    res.sendStatus(204);
  }
  
  function hasMovieIdInPath(req, res, next) {
    if (req.params.movieId) {
      return next();
    }
    methodNotAllowed(req, res, next);
  }
  
  function noMovieIdInPath(req, res, next) {
    if (req.params.movieId) {
      return methodNotAllowed(req, res, next);
    }
    next();
  }
  
  async function update(req, res) {
    const updatedReview = {
      ...res.locals.review,
      ...req.body.data,
      review_id: res.locals.review.review_id,
    };
    const data = await service.update(updatedReview);
    res.json({ data });
  }
  
  module.exports = {
    read: asyncErrorBoundary(read),
    destroy: [
      noMovieIdInPath,
      asyncErrorBoundary(reviewExists),
      asyncErrorBoundary(destroy),
    ],
    list: [hasMovieIdInPath, asyncErrorBoundary(list)],
    update: [
      noMovieIdInPath,
      asyncErrorBoundary(reviewExists),
      asyncErrorBoundary(update),
    ],
  };