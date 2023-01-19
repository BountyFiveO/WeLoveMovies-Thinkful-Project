const asyncErrorBoundary = require("../Errors/asyncErrorBoundary");
const service = require("./movies.service");

async function movieExists (req, res, next) {
    const { movieId } = req.params;
    console.log(movieId);
    const match = await service.read(movieId);
    if (!match)
      return next({
        status: 404,
        message: `Movie cannot be found.`,
      });
    res.locals.movies = match;
    next();
  }; 

async function list(req, res) {
    const {is_showing} = req.query;
    if (is_showing === "true") {
        const data = await service.listShowing()
        res.status(200).json({data});
    } else {
        const data = await service.list();
        res.status(200).json({data});
    }
}

async function read(req, res) {
    res.status(200).json({data:res.locals.movies});
}

async function listReviews(req, res) {
    const movieId = res.locals.movies.movie_id;
    const reviews = await service.listReviews(movieId);
    const allReviews = [];
    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      const critic = await service.getCritics(review.critic_id);
      review.critic = critic[0];
      allReviews.push(review);
    }
    res.status(200).json({ data: allReviews });
  }

  async function listTheaters(req, res) {
    const movieId = res.locals.movies.movie_id;
    const result = await service.listTheaters(movieId);
    res.status(200).json({ data: result });
  }

module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(movieExists),
            asyncErrorBoundary(read)],
    listReviews: [asyncErrorBoundary(movieExists),
                asyncErrorBoundary(listReviews)],
    listTheaters: [asyncErrorBoundary(movieExists),
                    asyncErrorBoundary(listTheaters)],
}